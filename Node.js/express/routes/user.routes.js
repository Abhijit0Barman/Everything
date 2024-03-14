const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user.controller");

const router = express.Router();

//Routes ClientSideRendering
/*
router.get("/", handleGetAllUsers);
router.post("/", handleCreateNewUser);
        OR YOU CAN MERGE INTO SINGLE BECAUSE BOTH HAVE SAME-END-POINT
*/
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;

/* BECAUSE OF "SAME ROUTE" WE ARE GONNA MERGE TOGATHER

    //GET request's
    app.get("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    
    //PATCH request's
    app.patch("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    
    //DELETE request's
    app.delete("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    */
