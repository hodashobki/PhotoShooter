const mongoose=require("mongoose");
Schema = mongoose.Schema;
 require("./user.model");
require("./comments.model");

const PhotSchema=new mongoose.Schema({
    
    user:{
        type:Schema.Types.ObjectId, ref:'User'
    },
    desc:{
        type:String,
        required:[true,"This field must not be Empty"]
    },
    img:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    like:{type:Number},
    // [{type:mongoose.Schema.Types.ObjectId, ref:'Message'}]
    comments:[{type:Schema.Types.ObjectId,ref:"Comment"}],

}, {timestamps: true});
const Phot=mongoose.model("Phot",PhotSchema);
module.exports=Phot;