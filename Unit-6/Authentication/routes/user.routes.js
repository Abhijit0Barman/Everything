const { UserModel } = require("../models/user.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { blacklist } = require("../blacklist");
const { auth } = require("../middleware/auth.middleware");
const { BlacklistModel } = require("../models/blacklist.model");
require("dotenv").config();

const userRouter = express.Router();
//inbuilt middleware  of express for routing

userRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(200).send({ message: "User already exists" });
        }
        bcrypt.hash(password, 5, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                res.status(200).send({
                    error: err.message,
                });
            } else {
                const user = new UserModel({
                    username,
                    email,
                    password: hash,
                });
                await user.save();
                res.status(201).send({
                    msg: "User registered successfully",
                    registered_mail: email,
                });
            }
        });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

userRouter.post("/login", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.status(201).send({ error: err.message });
                }
                // result == true
                if (result) {
                    const token = jwt.sign(
                        { email: email },
                        process.env.secretKey,
                        { expiresIn: "7d" }
                    );

                    const refresh_token = jwt.sign(
                        { email: email },
                        process.env.REFRESH_TOKEN_SECRET,
                        { expiresIn: "28d" }
                    );

                    res.status(201).send({
                        msg: "User logged in successfully",
                        token: token,
                        refresh_token,
                    });
                } else {
                    res.status(201).send({ msg: "Wrong Password!" });
                }
            });
        } else {
            res.status(201).send({
                msg: "User does not exist, Please Register!",
            });
        }
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});

userRouter.get("/logout", auth, async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const blackToken = new BlacklistModel({ token });
        await blackToken.save();
        res.status(201).send({
            msg: "User Logout successfully",
        });
        // blacklist.push(token);
        // res.send({ msg: "Logged out Successfully." });
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});

module.exports = {
    userRouter,
};
