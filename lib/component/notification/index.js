'use strict'

// dependencies
var Row = require('../').Row
var Icon = require('../').Icon

// styles
require('vigour-scratch')
require('./style.less')

/**
 * Notification
 */
module.exports = new Row({
  ui: {
    name: 'notification',
    atomic: 'organism'
  },
  icon: new Icon({
    size: 'h2'
  })
}).Constructor

module.exports.CloseButton = require('./button')
