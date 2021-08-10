const Comment=require("../models/comments.model");
const Phot = require("../models/phot.model");
const User = require("../models/user.model");

module.exports.findAllComment= (req,res) =>{
    Comment.find().populate('user')
    .then(comments=>res.json(comments))
    .catch(err=>res.json({ message: "Something went wrong", error: err}));
}

module.exports.createComments = async(req,res)=>{
    // Comment.create({text})
    // .then(newComment=>res.json({comment:newComment}))
    // .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
try{
    console.log("asd");
    const {text}=req.body;
    const user=await User.findOne({_id:req.params.idu})
    const photo=await Phot.findOne({_id:req.params.idp})
    const comment=await Comment.create({text,user:req.params.idu})
    console.log({text});
    if(!comment){
        console.log(User);
        res.status(400).json({message:"something is wrong"})
    }
    const finaluser=await User.findOneAndUpdate({_id: req.params.idu},{
        $push:{comments:comment}
    })
     
    console.log(comment)

    res.json(finaluser);

}
catch(err){
    console.log(err);
}
}
module.exports.findOneComment=(req,res)=>{
    Comment.findOne({_id: req.params.id})
    .then(oneComment=>res.json({comment:oneComment}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}