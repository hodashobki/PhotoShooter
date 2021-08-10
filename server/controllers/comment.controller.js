const Comment=require("../models/comments.model");

module.exports.createComments=async(req,res)=>{
    Comment.create({text})
    // .then(newComment=>res.json({comment:newComment}))
    // .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.findOneComment=(req,res)=>{
    Comment.findOne({_id: req.params.id})
    .then(oneComment=>res.json({comment:oneComment}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}