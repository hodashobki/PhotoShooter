const mongoose=require("mongoose");

const CommenttSchema=new mongoose.Schema({
    com:{
        type:String,
         required:[true,"you Must add a comment before submit"]
    },
    person:{
        type:String,
         required:[true,"you Must add your name before submit"]
    }
         
})
const CommentPlus=mongoose.model("CommentPlus",CommenttSchema)
module.exports=CommentPlus;