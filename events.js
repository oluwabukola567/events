var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on("data received", function(){
    console.log("data received successfully");
});
eventEmitter.emit("data_received");
eventEmitter.emit("data_received");