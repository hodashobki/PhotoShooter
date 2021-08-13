const UserController = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');
module.exports = app => {

  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/register",UserController.regUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
  app.post("/api/login", UserController.login);
  app.get("/api/logout", UserController.logout);
    //login and reg
  // app.post("/login", UserController.loginUser);
  // app.post("/register", UserController.regUser);
};
