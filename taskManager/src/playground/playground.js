require("../db/mongoose");
const Tasks = require("../models/task");

// Tasks.findByIdAndDelete("6607c38eb5f970004c001fbe")
//   .then((prom1) => {
//     console.log(prom1);
//     return Tasks.countDocuments({ completed: false });
//   })
//   .then((prom2) => {
//     console.log(prom2);
//   });

const deleteAndCountTask = async (id, truefalse) => {
  try {
    const deleteTask = await Tasks.findByIdAndDelete(id);
    const count = await Tasks.countDocuments({ completed: truefalse });
    console.log(deleteTask, count);
    return { deleteTask, count };
  } catch (e) {
    console.log(e);
  }
};
deleteAndCountTask("667078042d4d9940ae910c8b", false).then((task) => {
    console.log(task.count);
    console.log(task.deleteTask);
}).catch((e) => {console.log(e);});
