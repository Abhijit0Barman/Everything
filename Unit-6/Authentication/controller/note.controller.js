const { NoteModel } = require("../models/note.model");

const handleCreateNote = async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(201).send({ msg: "Note created successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const handleAllNote = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(201).send({ notes });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const handleUpdateNote = async (req, res) => {
  const { noteID } = req.params;
  try {
    const note = await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
    res.status(201).send({ msg: `Note Updated ID:${noteID}` });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const handleDeleteNote = async (req, res) => {
  const { noteID } = req.params;
  try {
    await NoteModel.findByIdAndDelete({ _id: noteID });
    res.status(201).send({ msg: `Note Deleted ${noteID}` });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = {
  handleCreateNote,
  handleAllNote,
  handleUpdateNote,
  handleDeleteNote,
};
