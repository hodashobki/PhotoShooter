const mongoose=require("mongoose");
require("./user.model");

const CommentsSchema=new mongoose.Schema({
     text:{
         type:String,
         required:[true,"you Must add a comment before submit"]
     },
     user:{     
        type:Schema.Types.ObjectId, ref:'User'
    }
})
const Comment=mongoose.model("Comment",CommentsSchema);
module.exports=Comment;