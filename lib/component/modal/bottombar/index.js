'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../../property')
)

/**
 * Bottombar
 */
module.exports = new Element({
  ui: {
    name: 'bottombar',
    atomic: 'molecule'
  }
}).Constructor
