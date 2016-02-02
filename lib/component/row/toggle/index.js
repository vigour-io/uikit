'use strict'

// styles
require('./style.less')

// dependencies
var Element = require('vigour-element')

/**
 * Switcher Row
 */
module.exports = new Element({
  type: 'label',
  css: {
    name: 'row',
    type: 'toggle-row',
    atomic: 'organism'
  }
}).Constructor
