const state     = require('./state')


var t = Date.parse('November 11 2016 16:45:00 UTC-0400') - Date.parse(new Date())
state.secs = Math.floor( (t/1000) % 60 )
state.mins = Math.floor( (t/1000/60) % 60 )
state.hours = Math.floor( (t/(1000*60*60)) % 24 )
state.days = Math.floor( t/(1000*60*60*24) )

const loop      = require('./loop')





document.body.appendChild(loop.target)

// update the main-loop
require('./events').on('update', loop.update)

setInterval(tick, 1000)

function tick(){
  var t = Date.parse('November 11 2016 16:45:00 UTC-0400') - Date.parse(new Date())
  state.secs = Math.floor( (t/1000) % 60 )
  state.mins = Math.floor( (t/1000/60) % 60 )
  state.hours = Math.floor( (t/(1000*60*60)) % 24 )
  state.days = Math.floor( t/(1000*60*60*24) )
  loop.update(state)
}
