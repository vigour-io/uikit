'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

/**
 * Topbar
 */
module.exports = new Element({
  css: {
    name: 'topbar',
    atomic: 'molecule'
  }
}).Constructor
