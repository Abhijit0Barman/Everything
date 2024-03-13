const mongooes = require("mongoose");

const userSchema = mongooes.Schema(
    {
        username: String,
        email: String,
        password: String,
    },
    {
        versionKey: false,
    }
);

const UserModel = mongooes.model("user", userSchema);
//  collectionName is "user"

module.exports = {
    UserModel,
};
