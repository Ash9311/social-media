const user = require("../models/user");
const user = require("./models/user");
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
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}