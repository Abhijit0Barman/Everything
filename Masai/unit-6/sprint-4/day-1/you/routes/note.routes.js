const express = require("express");
const { NoteModel } = require("../models/note.model");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");

const noteRouter = express.Router();

noteRouter.use(auth);

noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(200).send({ msg: "A new node has been added" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

noteRouter.patch("/update/:noteID", async (req, res) => {
  const { noteID } = req.params;
  try {
    await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
    res.status(200).send({ msg: `Note with ID${noteID} has been updated` });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

noteRouter.delete("/delete/:noteID", async (req, res) => {
  const { noteID } = req.params;
  try {
    await NoteModel.findByIdAndDelete({ _id: noteID });
    res.status(200).send({ msg: `Note with ID${noteID} has been Deleted` });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  noteRouter,
};
