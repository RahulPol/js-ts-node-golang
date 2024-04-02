// Import the 'ws' module
const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for when a client connects
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Event listener for messages received from the client
  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);
  });

  // Send a message to the client
  ws.send("Hello, client! Welcome to the WebSocket server!");
});

// Event listener for when the server is ready and listening for connections
wss.on("listening", function () {
  console.log("WebSocket server is listening on port 8080");
});
