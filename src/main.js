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

setTimeout( function(){
  $('.carousel').carousel({
      interval: 4000 //changes the speed
  })
  $.ajax({
    url:'/msgs',
    type:'get',
    dataType:'json',
    success:function (d) {
      state.msgs = d.all
      loop.update(state)
    },
    error: function(e){
      console.log('server error:', e)
    }
  })
}, 500)

var textarea = document.querySelector('textarea')
var input = document.querySelector('input')
var lastthing = document.querySelector('#thelastthing')


window.addEventListener('click', function(e){
  if (e.target.classList[1] === 'carousel-control') {
    if (e.target.classList[0] === 'left')
      return $('.carousel').carousel('prev')
    return $('.carousel').carousel('next')
  }
  
  if (e.target.classList[0] === 'icon-next')
    return $('.carousel').carousel('next')

  if (e.target.classList[0] === 'icon-prev')
    return $('.carousel').carousel('prev')

  if (e.target.classList[0] === 'generic')
    $('.carousel').carousel(Number(e.target['data-slide-to']))

  if (e.target.classList[0] === 'leavemsg') {
    console.log('clicked the submit msg button')
    submitter()
  }

}, false)

function submitter(){
  var i = input.value
  var text = textarea.value
  $.ajax({
    url:'/newmessage',
    type:'post',
    dataType:'json',
    data:{
      msg:text,
      name:i
    },
    success:function (d) {
    },
    error: function(e){
      console.log('server error:', e)
    }
  })
  state.msgs.push(i+':::'+text)
  loop.update(state)
  input.value = ''
  textarea.value =''
  lastthing.scrollIntoView()
}
