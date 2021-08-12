const Phot=require("../models/phot.model");
const User = require("../models/user.model");
// module.exports.findAllPost=(req,res)=>{
//   Phot.find()
//   .then(allPhot=>res.json({phots:allPhot})) 
//   .catch(err=>res.json({ message: "Something went wrong", error: err})) ;
// };


module.exports.findAllPost= (req,res) =>{
    Phot.find().populate('user')
    .then(photos=>res.json(photos))
    .catch(err=>res.json({ message: "Something went wrong", error: err}));
}

module.exports.findonePhot=(req,res)=>{
    // Phot.findOne({_id:req.params.id}).populate('user').populate('comments')
    // .then(onesinglePhot=>res.json({photo:onesinglePhot}))
    // .catch(err=>res.json({message: "Something went wrong", error: err}));



    
    // const photo = await Phot.findOne({_id:req.params.id})
    
    // await photo.populate('user').populate('comments').execPopulate()

    // await photo.comments.populate('user').execPopulate()
    
    // res.json({photo:photo})

    Phot.findOne({_id:req.params.id}).populate({
        path: 'comments',
        populate: { path: 'user' }
    })
    .populate({
        path: 'user'
    })
    .then(onesinglePhot=>res.json({photo:onesinglePhot}))
    .catch(err=>res.json({message: "Something went wrong", error: err}));
};

module.exports.creatNewPhot = async (req, res) => {
     // User.findOneAndUpdate({_id: req.params.id},{
    //     $push: { photo: {title:req.body.title, {desc:req.body.desc,
    //     img:req.body.img,
    //     comment:{text:req.body.user} }}
    // })
    try{
    const {desc,img,title} = req.body;
    const user =await User.findOne({_id: req.params.id})
    console.log("user")
    console.log(user)
    const photo = await Phot.create({ user,desc,img,title})
    if(!photo){
        res.status(400).json({message:"something is wrong"})
    }
    console.log("Photo")
    console.log(photo);
    
    const finalUser =await User.findOneAndUpdate({_id: req.params.id},{
        $push:{photo:photo}
    })

        console.log("Final User")
        res.json(finalUser);
    }catch(err){
        console.log(err)
        // res.status(400).json(err)
    }
    }
 
// module.exports.creatNewPhot=(req,res)=>{
//     Phot.create(req.body)
//     .then(newlyPhot=>res.json({phot:newlyPhot}))
//     .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
// };
 module.exports.updateExistingPhot=(req,res)=>{
   
     Phot.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
     .then(updatePhot=>res.json({phot:updatePhot}))
     .catch(err => res.json({ message: "Something went wrong", error: err }));
 };

 module.exports.deleteAnExistingPhot=(req,res)=>{
     Phot.deleteOne({ _id: req.params.id })
     .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
 }