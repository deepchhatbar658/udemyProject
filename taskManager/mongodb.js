const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(connectionURL);
const id = new ObjectId();
client
  .connect()
  .then(() => {
    console.log("Connect");
    const db = client.db(databaseName);
    db.collection("tasks")
      .deleteOne({
        description: "deepchhatbar",
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // db.collection('users').updateMany({_id:new ObjectId('66008a52150041112bd5054c')})
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectId("6600905506c10ae7873788a0") },
    //     {
    //       $set: {
    //         name: "chhaya chhatbar",
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result, "updated successfully"))
    //   .catch((error) => console.log(error));
    // db.collection("users")
    //   .find({ name: "deep chhatbar" })
    //   .toArray()
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    // db.collection("users").insertOne({
    //   name: "deep chhatbar",
    //   age: 23,
    // })
    // db.collection("users")
    //   .insertMany([
    //     { name: "deep chhatbar", age: 23 },
    //     { name: "bharat chhatbar", age: 53 },
    //   ])
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // db.collection('tasks').insertMany([
    //     {
    //         title: "deep chhatbar",
    //         description: "deep chhatbar",
    //         completed: false,
    //     },{
    //         title: "deep ",
    //         description: " chhatbar",
    //         completed: true,
    //     },{
    //         title: "deepchatbar",
    //         description: "deepchhatbar",
    //         completed: false,
    //     }
    // ]).then((result)=>console.log(result)).catch((err)=>console.log(err))
  })
  .catch((err) => console.log(err));
// mongoClient.connect(connectionURL,{})
