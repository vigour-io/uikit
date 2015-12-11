'use strict'

// dependencies
var Element = require('vigour-element')
var ui = require('../../')

// inject
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Notification
 */
module.exports = new ui.Row({
  css: 'ui-organism ui-notification ui-form-group ui-animated fadeInDown'
}).Constructor
