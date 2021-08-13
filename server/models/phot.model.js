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
        required:[true,"This field must not be Empty"],
        minlength: [5, "Description must be at least 5 characters long"],
    },
    img:{
        type:String,
        required:[true,"This field must not be Empty"]
    },
    title:{
        type:String,
        required:[true,"This field must not be Empty"],
        minlength: [3, "Title must be at least 3 characters long"],
    },
    like:{
        type:Number ,
        default: 0
    },
    // [{type:mongoose.Schema.Types.ObjectId, ref:'Message'}]
    comments:[{type:Schema.Types.ObjectId,ref:"Comment"}],
    selectedFile: String,

}, {timestamps: true});
const Phot=mongoose.model("Phot",PhotSchema);
module.exports=Phot;