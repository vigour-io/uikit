'use strict'

// dependencies
var Element = require('vigour-element')

// styles
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Row
 */
module.exports = new Element({
  css: 'ui-organism ui-row'
}).Constructor
