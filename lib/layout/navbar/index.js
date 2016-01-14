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
  ui: {
    name: 'navbar',
    atomic: 'molecule'
  }
}).Constructor
