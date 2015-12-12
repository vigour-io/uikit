'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

/**
 * Seperator elements
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'br',
  ui: {
    name: 'br'
  }
}).Constructor
