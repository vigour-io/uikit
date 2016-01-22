'use strict'

// styles
require('vigour-scratch')
require('./style.less')

// dependencies
var Element = require('../../element')

/**
 * Seperator elements
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'br',
  css: {
    name: 'br'
  }
}).Constructor
