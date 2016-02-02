'use strict'

// styles
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Label Row
 */
module.exports = new Element({
  css: {
    name: 'row',
    type: 'label-row',
    atomic: 'organism'
  },

  label: {
    css: {
      name: 'label',
      scheme: 'secondary',
      inverse: true
    }
  }
}).Constructor
