const h = require('virtual-dom/h')
const ee = require('../events')

module.exports = function (state) {
  return h('div', [
    h('.brand', 'Aly & TJ'),
    h('.address-bar', 'Countdown to the wedding of Alyson Julia and Thomas Joshua'),
    h('.navbar.navbar-default', {role:'navigation'}, [
      h('.container', [
        h('.navbar-header', [
          h('button.navbar-toggle', {
            type:'button',
            'data-toggle':'collapse',
            'data-target':'#bs-example-navbar-collapse-1'
          }, [
            h('span.sr-only', 'Toggle navigation'),
            h('span.icon-bar'),
            h('span.icon-bar'),
            h('span.icon-bar')
          ]),
          h('a.navbar-brand', {
            href:'/'
          }, 'alyandtj.com')
        ]),
        h('.collapse.navbar-collapse.timer#bs-example-navbar-collapse-1', [
          h('#clockdiv', [
            h('#clockElement', [h('span.days.clockNumber', state.days +''), ' Days']),
            h('#clockElement', [h('span.hours.clockNumber', state.hours+''), ' Hours']),
            h('#clockElement', [h('span.minutes.clockNumber', state.mins+''), ' Minutes']),
            h('#clockElement', [h('span.seconds.clockNumber', state.secs+''), ' Seconds']),
          ])
        ])
      ])
    ]),
    h('h1', [
      h('span', 'mookie pookie bookie: '),
      h('span', String(state.count))
    ]),
    h('button', {
      onclick: function(e){
        state.count++
        ee.emit('update', state)
      }
    }, 'truukie it up by 1'),
    h('button', {
      onclick: function(e){
        state.count--
        ee.emit('update', state)
      }
    }, 'truukie her down'),
  ])
}
