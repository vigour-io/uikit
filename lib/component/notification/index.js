'use strict'

// dependencies
var Row = require('../').Row

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
  }
}).Constructor

module.exports.CloseButton = require('./button')
