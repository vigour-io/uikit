'use strict'

// styles
require('vigour-scratch')
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Seperator elements
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'br',
  css: {
    name: 'br'
  }
}).Constructor
