const mongoose=require("mongoose");
Schema = mongoose.Schema;
 require("./user.model");

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
    likes:[{user:{ type:Schema.Types.ObjectId, ref:'User'}}],

}, {timestamps: true});
const Phot=mongoose.model("Phot",PhotSchema);
module.exports=Phot;