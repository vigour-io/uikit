'use strict'

// styles
require('vigour-scratch')
require('./style.less')

// dependencies
var Element = require('../../element')

/**
 * Navbar
 */
module.exports = new Element({
  css: {
    name: 'navbar',
    atomic: 'molecule'
  }
}).Constructor
