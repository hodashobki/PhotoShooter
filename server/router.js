const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('You see server is up running');
});

module.exports=router;