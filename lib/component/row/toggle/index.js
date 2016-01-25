'use strict'

// styles
require('./style.less')

// dependencies
var Element = require('../../../element')

/**
 * Switcher Row
 */
module.exports = new Element({
  node: 'label',
  css: {
    name: 'row',
    type: 'toggle-row',
    atomic: 'organism'
  }
}).Constructor
