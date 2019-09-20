var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res) {
  res.send("<h1> Hello from Socket.io </h1>");
});

//*Log when a user connects:
io.on("connection", function(socket) {
  console.log("[+] A user connected !!");
});

server.listen(3001, function() {
  console.log("Listening on port 3001...");
});
