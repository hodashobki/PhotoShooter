const CommentPlus=require("../models/coment.model");

module.exports.createCommentPlus=(req,res)=>{
CommentPlus.create(req.body)
.then(newcomment=>res.json({comment:newcomment}))
.catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
};