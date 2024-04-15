const mongooes = require("mongoose");

const noteSchema = mongooes.Schema(
  {
    title: String,
    body: String,
    userID: {
      type: String,
      require: true,
    },
    username: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NoteModel = mongooes.model("note", noteSchema);
//  collectionName is "user"

module.exports = {
  NoteModel,
};
