const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./routes/user.routes");
const jwt = require("jsonwebtoken");
const { auth } = require("./middleware/auth.middleware");

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/", (req, res) => res.send("<h1>😄😁🥰</h1>"));

//Restricted routes only a logged in user can access this route

app.get("/movies", auth, (req, res) => {
    try {
        res.status(200).send({ msg: "Welcome to the restricted route" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.get("/series", auth, (req, res) => {
    try {
        res.status(200).send({ msg: "Welcome to the restricted route" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.get("/refresh", (req, res) => {
    const refresh_token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);
    if (decoded) {
        const token = jwt.sign(
            { email: decoded.email },
            process.env.secretKey,
            { expiresIn: "7d" }
        );
        res.send(token);
    } else {
        res.send({ msg: "Invalid Refresh Token!" });
    }
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Connected & Server is running at port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});

// const { token } = req.query;
// const token = req.headers.authorization.split(" ")[1];
// jwt.verify(token, process.env.secretKey, (err, decoded) => {
//     console.log(decoded);
//     if (decoded) {
//         res.send("Series Data...");
//     } else {
//         res.send("You  are not authorized to view this data.");
//     }
// });
