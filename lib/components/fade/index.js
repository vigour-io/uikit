'use strict'

// dependencies
var Element = require('vigour-element')

// scratch
require('vigour-scratch')
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

/**
 * Fading
 */
module.exports = new Element({
  ui: {
    name: 'fade',
    color: 'fade-dark',
    atomic: 'atom',
    interactive: true
  }
}).Constructor
