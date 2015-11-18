'use strict'
var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Notification
 */
module.exports = new ui.Row({
  css: 'ui-organism ui-notification ui-form-group',
  on: {
    click() {
      this.setKey('css', {
        removeClass: 'fadeOut',
        addClass: 'animated fadeInDown'
      })
    }
  }
}).Constructor
