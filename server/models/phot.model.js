const mongoose=require("mongoose");
Schema = mongoose.Schema;
 require("./user.model");
//  const PostSchema = require("./posts.model");

const PhotSchema=new mongoose.Schema({
    
    // user:{
    //     type:Schema.Types.ObjectId, ref:'User'
    // },
    desc:{
        type:String,
        require:[true,"This field must not be Empty"]
    },
    img:{
        type:String,
    },
    title:{
        type:String,
        require:true
    },
    likers:[{type:Schema.Types.ObjectId, ref:'User'}],
    // posts:[PostSchema],

}, {timestamps: true});
const Phot=mongoose.model("Phot",PhotSchema);
module.exports=Phot;