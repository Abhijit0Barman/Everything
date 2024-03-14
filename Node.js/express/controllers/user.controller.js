const UserModel = require("../models/user.model");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await UserModel.find({});
  return res.send(allDbUsers);
}

const handleGetUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findById(id);
  // const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ err: "Does Not Exist" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findByIdAndUpdate(id, {
    lastName: "patched",
  });
  // const user = users.find((user) => user.id === id);
  return res.json(user);
};

async function handleDeleteUserById(req, res) {
  const id = req.params.id;
  // const user = users.find((user) => user.id === id);
  await UserModel.findByIdAndDelete(id);
  return res.json(user);
}

const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  const { first_name, last_name, email, gender, job_title } = body;
  if (!body || !job_title || !gender || !email || !last_name || !first_name) {
    return res.status(400).json({ error: "All fields is required" });
  }

  const result = await UserModel.create({
    firstName: first_name,
    lastName: last_name,
    email: email,
    gender: gender,
    jobTitle: job_title,
  });
  // console.log(result);
  return res.status(201).json({ msg: "successfull", id: result._id });

  // console.log(body);
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  //   return res.json({ post: "successfull", id: users.length });
  // });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
