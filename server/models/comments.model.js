const mongoose=require("mongoose");
require("./user.model");

const CommentsSchema=new mongoose.Schema({
     text:{
         type:String,
         required:[true,"you Must add a comment before submit"]
     },
     user:{
        type:String,
    }
})
const Comment=mongoose.model("Comment",CommentsSchema);
module.exports=Comment;