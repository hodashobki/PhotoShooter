const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    // res.send('You server is up running');
    res.send({ response: "Server is up and running you see." }).status(200);
});

module.exports=router;