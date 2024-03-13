const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./routes/user.routes");

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/", (req, res) => res.end("hello world"));

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Connected & Server is running at port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
