'use strict'

// dependencies
var Element = require('vigour-element')

// inject
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

/**
 * Seperator elements
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'hr',
  ui: {
    name: 'hr'
  }
}).Constructor
