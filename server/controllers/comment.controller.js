const Comment=require("../models/comments.model");
const User = require("../models/user.model");

module.exports.createComments=async(req,res)=>{
    // Comment.create({text})
    // .then(newComment=>res.json({comment:newComment}))
    // .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
try{
    const {text}=req.body;
    const user=await User.findOne({_id:req.params.id})
    const photo=await Phot.findOne({_id:req.params.id})
    const comment=await Comment.create({text})
    if(!comment){
        res.status(400).json({message:"something is wrong"})
    }
    const finaluser=awaitUser.findOneAndUpdate({_id: req.params.id},{
        $push:{comment:comment}
    })
    res.json(finaluser);

}
catch(err){
    
}
}
module.exports.findOneComment=(req,res)=>{
    Comment.findOne({_id: req.params.id})
    .then(oneComment=>res.json({comment:oneComment}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}