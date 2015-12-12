'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Bottombar
 */
module.exports = new Element({
  css: 'ui-molecule ui-bottombar'
}).Constructor
