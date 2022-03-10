const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please enter a name"],
    },
    avatar:{
        public_id:String,
        url:string
    },

    email:{
        type:String,
        required: [true,"Please enter an email"],
        unique: [true,"Email already exists"]
    },
    password:{
        type:String,
        required: [true,"Please enter a password"],
        minlength: [6,"Password must be atleast 6 characters"],
        select:false
    },
    posts:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
    }
   ],
   followers:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:user
   }],
   following:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:user
}]
});
module.exports = mongoose.model("User",userSchema);