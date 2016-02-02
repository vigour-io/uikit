'use strict'

// style
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Label element
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'label',

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
