const express = require("express");
const User = require("./models/user");
const Tasks = require("./models/task");
require("../src/db/mongoose");
let app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});
app.post("/create/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send(e);
  }
  //   task
  //     .save()
  //     .then((data) => res.send(task))
  //     .catch((err) => res.status(400).send(err));
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send(allUsers);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const userFoundWithId = await User.find({ _id });
  try {
    res.status(200).send(userFoundWithId);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const user = await User.findByIdAndUpdate(_id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await Tasks.find({});
    res.status(200).send(allTasks);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
  //   const _id = req.params.id;
  //   console.log(req.params);
  //   Tasks.findById(_id)
  //     .then((task) => res.send(task))
  //     .catch((err) => res.status(400).send(err));
  const _id = req.params.id;
  try {
    const taskFoundById = await Tasks.findById(_id);
    res.status(200).send(taskFoundById);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log("listening on portp", port);
});
