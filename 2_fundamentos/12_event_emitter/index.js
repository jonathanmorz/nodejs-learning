const events = require("events")
const eventEmitter = new events()

eventEmitter.on('start', () =>{
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start')

console.log("Depois")