const Todo = require("./database/models/Todo");
function start({io,mongoose}) {
 

  io.on("connection", function (socket) {
    console.log("A user connected");

    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });

  mongoose.connection.on("open", (err) => {
    console.log("connected to mongodb");

    Todo.watch().on("change", (change) => {
      console.log("changed event triggeret");
      switch (change.operationType) {
        case "insert":
          console.log("some data inserted");
          io.emit("add", change.fullDocument);
          break;
        case "update":
          console.log(change);
          io.emit("update", {
            ...change.updateDescription.updatedFields,
            _id: change.documentKey._id,
          });
          break;
        case "delete":
          io.emit("delete", change.documentKey);
          break;
        default:
          break;
      }
    });
  });
}

module.exports.socket = start;
