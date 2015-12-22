'use strict'

// dependencies
var Element = require('vigour-element')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

// style
require('vigour-scratch')
require('./style.less')

/**
 * Modal
 */
module.exports = new Element({
  ui: {
    name: 'modal',
    size: 'medium',
    scheme: 'secondary',
    atomic: 'organism'
  }
}).Constructor
