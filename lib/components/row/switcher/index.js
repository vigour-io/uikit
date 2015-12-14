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
 * Switcher Row
 */
module.exports = new Element({
  ui: {
    name: 'row',
    type: 'switcher-row',
    atomic: 'organism'
  },
  node: 'label'
}).Constructor
