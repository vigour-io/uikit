'use strict'

// style
require('vigour-scratch')
require('./style.less')

// dependencies
var Element = require('../../element')

/**
 * Container component
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  ui: {
    name: 'container',
    size: 'flexible',
    atomic: 'atom'
  }
}).Constructor
