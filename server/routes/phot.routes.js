const PhotController=require("../controllers/phot.controller");
module.exports=app=>{
    app.get("/api/phots/",PhotController.findAllPost);
    app.get("/api/phots/:id",PhotController.findonePhot);
    app.put("/api/phots/update/:id",PhotController.updateExistingPhot);
    app.post("/api/phots/new/:id",PhotController.creatNewPhot);
    app.delete("/api/phots/delete/:id",PhotController.deleteAnExistingPhot);
}