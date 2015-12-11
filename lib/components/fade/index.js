'use strict'

// dependencies
var Element = require('vigour-element')

// style
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Fading
 */
module.exports = new Element({
  css: 'ui-atom ui-fade ui-fade-dark'
}).Constructor
