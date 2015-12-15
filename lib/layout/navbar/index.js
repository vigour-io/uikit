'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/text'),
  require('../../property')
)

/**
 * Topbar
 */
module.exports = new Element({
  ui: {
    name: 'navbar',
    atomic: 'molecule'
  }
}).Constructor
