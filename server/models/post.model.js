const mongoose=require("mongoose");
require("./user.model");

const postSchema=new mongoose.Schema({
    
    user:{
        type:Schema.Types.ObjectId, ref:'User'
    },
    desc:{
        type:String,
        require:[true,"This field must not be Empty"]
    },
    img:{
        type:String,
    },
    title:{
        type:String,
        require:true
    },
    likes:[{user:{ type:Schema.Types.ObjectId, ref:'User'}}]

})