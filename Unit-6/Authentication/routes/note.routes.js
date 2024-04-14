const express = require("express");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");
require("dotenv").config();

const noteRouter = express.Router(); //inbuilt middleware  of express for routing

const {
  handleCreateNote,
  handleAllNote,
  handleUpdateNote,
  handleDeleteNote,
} = require("../controller/note.controller");

noteRouter.post("/create", handleCreateNote);
noteRouter.get("/", handleAllNote);
noteRouter.patch("/update/:noteID", handleUpdateNote);
noteRouter.delete("/delete/:noteID", handleDeleteNote);

module.exports = {
  noteRouter,
};
