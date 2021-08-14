const CommentPlus=require("../controllers/commentplus.controller");

module.exports=app=>{
    app.post("/api/comment/:id",CommentPlus.createCommentPlus);
}