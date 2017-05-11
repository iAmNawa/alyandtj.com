const h = require('virtual-dom/h')
const ee = require('../events')

module.exports = function (state) {
  return h('div', [
    h('h1', 'the ' + state.page + ' page')
  ])
}

//
