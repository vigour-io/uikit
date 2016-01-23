'use strict'

// style
require('./style.less')

// dependencies
var Element = require('../../element')

/**
 * Label element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'label',

  // css defaults
  css: {
    name: 'label',
    scheme: 'graylight',
    size: 'medium',
    state: 'clean',
    atomic: 'molecule',
    childOf: 'form-element',
    interactive: false
  }
}).Constructor
