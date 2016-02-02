'use strict'

// style
require('vigour-scratch')
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Container component
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  css: {
    name: 'container',
    size: 'flexible',
    atomic: 'atom'
  }
}).Constructor
