'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')
require('./overlay-loader/style.less')

/**
 * Loader
 * @memberOf UIKit
 */
module.exports = new Element({
  css: {
    name: 'loader'
  }
}).Constructor
