const CommentController=require("../controllers/comment.controller");
module.exports = app => {
    app.get("/api/comment/:id", CommentController.findOneComment);
    // app.get("/api/comment/", CommentController.findOneComment);
    app.post("/api/comment/new", CommentController.createComments);
    // app.delete("/api/comment/delete/:id", UserController.deleteAnExistingUser);
  };