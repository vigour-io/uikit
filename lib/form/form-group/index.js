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
