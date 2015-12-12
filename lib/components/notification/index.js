'use strict'

// dependencies
var Element = require('vigour-element')
var ui = require('../../')

// styles

require('vigour-scratch')
require('./style.less')

// inject
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Notification
 */
module.exports = new ui.Row({
  css: 'ui-organism ui-notification ui-animated fadeInDown'
}).Constructor
