const { auth } = require("../middleware/auth.middleware");
const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleLogin,
  handleLogout,
} = require("../controller/user.controller");

const userRouter = express.Router(); //inbuilt middleware  of express for routing

userRouter.post("/register", handleCreateNewUser);
userRouter.post("/login", handleLogin);

userRouter.use(auth);
userRouter.post("/logout",  handleLogout);

userRouter.get("/", handleGetAllUsers);
userRouter
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = {
  userRouter,
};
