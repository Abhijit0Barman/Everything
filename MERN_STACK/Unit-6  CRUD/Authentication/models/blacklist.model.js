const mongooes = require("mongoose");

const blacklistSchema = mongooes.Schema(
  {
    token: String,
  },
  { timestamps: true, versionKey: false }
);

const BlacklistModel = mongooes.model("blacklist", blacklistSchema);

module.exports = {
  BlacklistModel,
};
