'use strict'

// dependencies
var Element = require('vigour-element')
var ui = require('../../')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

/**
 * Notification
 */
module.exports = new ui.Row({
  ui: {
    name: 'notification',
    animate: 'fade-in-down',
    atomic: 'organism'
  }
}).Constructor
