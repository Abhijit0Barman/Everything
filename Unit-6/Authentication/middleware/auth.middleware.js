const jwt = require("jsonwebtoken");
// const { blacklist } = require("../blacklist");
const { BlacklistModel } = require("../models/blacklist.model");
require("dotenv").config();

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        // if (blacklist.includes(token)) {
        //     return res
        //         .status(201)
        //         .send({ msg: "You have been logged out, Please login again!" });
        // }
        const blackToken = await BlacklistModel.findOne({ token });
        if (blackToken) {
            return res
                .status(201)
                .send({
                    msg: "You have been logged out, Please login again! 💀",
                });
        }
        jwt.verify(token, process.env.secretKey, (err, decoded) => {
            // console.log(decoded);
            if (decoded) {
                next();
            } else {
                res.send({ msg: "You  are not authorized to view this data!" });
            }
        });
    } else {
        res.send({ msg: "You  are not Login!" });
    }
};

module.exports = {
    auth,
};
