'use strict'

// dependencies
var Element = require('vigour-element')

// styles
module.exports.inject = require('./style.less')

// components
var Label = require('../index')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Label Row
 */
module.exports = new Element({
  css: 'ui-organism ui-row with label',
  label: new Label()
}).Constructor
