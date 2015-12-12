'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

/**
 * Modal
 */
module.exports = new Element({
  ui: {
    name: 'modal',
    size: 'medium',
    color: 'secondary',
    atomic: 'organism'
  }
}).Constructor
