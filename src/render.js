const h = require('virtual-dom/h')
const ee = require('./events')

const view = require('./views')

module.exports = render

function render (state) {
  return h('div', [
    //h('nav',
    //  state.pages.map( page => h('p' + (state.page === page
    //    ? '.active' : ''), {
    //      onclick: function(e){
    //        state.page = page
    //        ee.emit('update', state)
    //      }
    //    }, page) ) ),
    //view[state.page](state)
    view.home(state)
  ])
}
