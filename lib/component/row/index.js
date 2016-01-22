'use strict'

// dependencies
var Element = require('../../element')

// styles
require('vigour-scratch')
require('./style.less')

/**
 * Row
 */
module.exports = new Element({
  css: {
    name: 'row',
    atomic: 'organism'
  }
}).Constructor
