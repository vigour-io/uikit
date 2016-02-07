'use strict'

// style
require('./style.less')

// dependencies
var Element = require('../../element')

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
