const { server } = require("./app");
const Todo = require("./database/models/Todo");

const io = require("socket.io")(server, {
  // below are engine.IO options
  cors: { origin: "*" },
});

function start() {
  io.on("connection", function (socket) {
    console.log("A user connected");

    Todo.watch().on("change", (change) => {
        console.log(change)
        switch (change.operationType) {
          case "insert":
            io.emit("add",change.fullDocument)
            break;
           case "update":
            io.emit("update",change.updateDescription.updatedFields)
           break;
          case "delete":
            io.emit("delete",change.documentKey)
               break; 
          default:
            break;
        }
      });

    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });
}

module.exports.socket = start;
