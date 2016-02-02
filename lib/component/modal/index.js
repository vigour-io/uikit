'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

/**
 * Modal
 */
module.exports = new Element({
  css: {
    name: 'modal',
    size: 'medium',
    scheme: 'secondary',
    inverse: true,
    atomic: 'organism'
  }
}).Constructor
