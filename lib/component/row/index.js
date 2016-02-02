'use strict'

// styles
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Row
 */
module.exports = new Element({
  css: {
    name: 'row',
    atomic: 'organism'
  }
}).Constructor
