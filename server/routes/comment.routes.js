const CommentController=require("../controllers/comment.controller");
module.exports = app => {
    app.get("/api/comment/:id", CommentController.findOneComment);
     app.get("/api/comment/", CommentController.findAllComment);
    app.post("/api/comment/new/:idu/:idp", CommentController.createComments);
    // app.delete("/api/comment/delete/:id", UserController.deleteAnExistingUser);
  };