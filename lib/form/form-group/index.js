'use strict'

// dependencies
var Element = require('../../element')

// style
require('vigour-scratch')
require('./style.less')

/**
 * Label element
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  ui: {
    name: 'form-group',
    scheme: 'graylight',
    size: 'medium',
    atomic: 'molecule',
    childOf: 'form-element',
    interactive: false
  }
}).Constructor
