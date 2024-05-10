const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/calculateBMI", (req, res) => {
  let { weight,height } = req.body;

  // console.log(height, weight);
  if (!height || !weight || isNaN(weight) || isNaN(height)) {
    return res.status(400).json({ error: "Invalid data" });
  }
  const bmi = weight / (height * height);
  // console.log(typeof bmi);
  return res.json({ bmi });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
