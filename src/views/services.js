const h = require('virtual-dom/h')
const ee = require('../events')

module.exports = function (state) {
  return h('div', [
    h('h1', 'the ' + state.page + ' page'),
    h('h3', 'some more shit in the services page..')
  ])
}
