const CommentPluss=require("../controllers/commentplus.controller");

module.exports=app=>{
    app.exports("/api/comment/:idp",CommentPluss.createCommentPlus);
}