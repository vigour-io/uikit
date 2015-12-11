'use strict'

// dependencies
var Element = require('vigour-element')

// style
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

// inject
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Label element
 * @memberOf UIKit
 */

module.exports = new Element({
  // css defaults
  ui: {
    name: 'form-group',
    color: 'grayscale-light-inverse',
    size: 'medium',
    state: 'clean',
    atomic: 'molecule',
    childOf: 'form-element',
    interactive: false
  }
}).Constructor
