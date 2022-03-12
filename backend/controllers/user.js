const user = require("../models/user");
let mongoose = require("mongoose");

exports.register = async(req,res) => {
    try {
        const{name,email,body}=req.body;
        let user = await user.findOne({email});

        if(user){
            return res.status(400).json({success:false,message: "User already exists"});
        }
        
        user = await user.create({
            name,email,password,avatar:{public_id:"sample_id",url:"sampleurl"}
        });

        res.status(201).json({success:true,user});
    }

     catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    };
};
exports.login = async(req,res) => {
    try {
        const{email,password} = req.body;
        const user = await user.findOne({email}).select("+password");

        if(!user){
            return res.status(400).json({
                success:false,
                message:"user does not exist"
            });
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            })
        }

        console.log(email,password);
        const token = await user.generateToken();

        const options = {
            expires:new Date(Date.now()+90*24*60*60*1000)
            ,
        httpOnly:true,
        }

        res.status(200).cookie("token",token,options).
        json({
            success:true,
            user,
            token
        })
    } 
    
    catch (error) {
        res.status(500).json({
        success:false,
        message:error.message,
        });
    }
}