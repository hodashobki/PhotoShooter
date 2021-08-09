const Phot=require("../models/phot.model");

// module.exports.findAllPost=(req,res)=>{
//   Phot.find()
//   .then(allPhot=>res.json({phots:allPhot})) 
//   .catch(err=>res.json({ message: "Something went wrong", error: err})) ;
// };


module.exports.findAllPost= (req,res) =>{
    Phot.find().populate('likers')
    .then(photos=>res.json(photos))
    .catch(err=>res.json({ message: "Something went wrong", error: err}));
}

module.exports.findonePhot=(req,res)=>{
    Phot.findOne({_id:req.params.id}).populate('likers')
    .then(onesinglePhot=>res.json({photo:onesinglePhot}))
    .catch(err=>res.json({message: "Something went wrong", error: err}));
};

module.exports.creatNewPhot = async (req, res) => {
    const { desc,img,title} = request.body;
    await Phot.create({ desc,img,title})
        .then(photo=> {
            User.findOneAndUpdate({'_id':id},{ 
                $push:{likers:photo}
             })
             .catch(err => res.json(err));
             return res.json(photo)
        })
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
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