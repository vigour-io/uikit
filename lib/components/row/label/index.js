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
 * Label Row
 */
module.exports = new Element({
  ui: {
    name: 'row',
    type: 'label-row',
    atomic: 'organism'
  },

  label: {
    ui: {
      name: 'label',
      scheme: 'secondary',
      inverse: true
    }
  }
}).Constructor
