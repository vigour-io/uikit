'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

/**
 * Bottombar
 */
module.exports = new Element({
  css: {
    name: 'bottombar',
    atomic: 'molecule'
  }
}).Constructor
