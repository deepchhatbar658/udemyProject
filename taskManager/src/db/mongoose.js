// const { MongoNetworkError } = require("mongodb");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });
// const Tasks = mongoose.model("tasks", {
//   description: {
//     type: String,
//     require:true,
//   trim:true,

//   },
//   completed: {
//     type: Boolean,
//     default:false
//   },
// });
// const saveUser = new User({
//   name: "this is deep",
//   age: 23,
// });
// saveUser
//   .save()
//   .then((result) => console.log(result))̥
//   .catch((err) => console.log(err));
// const desc = new Tasks({
//   description: "hel is first task ",
//   completed: false,
// });
// desc
//   .save()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
