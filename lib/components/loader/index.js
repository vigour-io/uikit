'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Loader
 * @memberOf UIKit
 */
module.exports = new Element({
  css: 'ui-loader'
}).Constructor
