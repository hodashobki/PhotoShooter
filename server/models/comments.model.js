const mongoose=require("mongoose");

const CommentsSchema=new mongoose.Schema({
     text:{
         type:String,
         required:[true,"you Must add a comment before submit"]
     }
})
const Comment=mongoose.model("Comment",CommentsSchema);
module.exports=Comment;