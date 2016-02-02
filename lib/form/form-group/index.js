'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('./style.less')

/**
 * Label element
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  css: {
    name: 'form-group',
    scheme: 'graylight',
    size: 'medium',
    atomic: 'molecule',
    childOf: 'form-element',
    interactive: false
  }
}).Constructor
