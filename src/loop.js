module.exports = require('main-loop')(require('./state'), require('./render'), {
  create  : require('virtual-dom/create-element'),
  diff    : require('virtual-dom/diff'),
  patch   : require('virtual-dom/patch')
})
