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
 * Bottombar
 */
module.exports = new Element({
  css: 'ui-molecule ui-bottombar'
}).Constructor
