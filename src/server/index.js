var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res) {
  res.send("<h1> Hello from Socket.io </h1>");
});

//*Log when a user connects:
io.on("connection", function(socket) {
  console.log("[+] A user connected !!");

  //*Listen for emits:
  socket.on("chat message", function(msg) {
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", { msg });
  });
});

server.listen(3001, function() {
  console.log("Listening on port 3001...");
});
