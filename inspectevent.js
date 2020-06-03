var events = require("events");
var eventEmitter = events.EventEmitter
var emitter = new eventEmitter();
emitter.on("data_received", function(){});
emitter.on("data_received", function(){});
console.log(eventEmitter.listenerCount(emitter,"data_received"));