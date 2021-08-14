const CommentPlus=require("../models/coment.model");
const Phot= require("../models/phot.model");
module.exports.createCommentPlus= async(req,res)=>{
    console.log(req.body)
    
    try{
        let createdComment=await CommentPlus.create(req.body)
        let photonew=await Phot.findByIdAndUpdate((req.params.id),{$push:{comments:createdComment}},{new:true})
        return res.json({
            success:true,
            data :createdComment
        })

    }
    catch(err){
res.status(400).json(err)
    }
};
// CommentPlus.create(req.body)
// .then(newcomment=>res.json({comment:newcomment}))
// .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
// };