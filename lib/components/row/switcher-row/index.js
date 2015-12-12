'use strict'

// dependencies
var Element = require('vigour-element')

// styles

require('vigour-scratch')
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Switcher Row
 */
module.exports = new Element({
  css: 'ui-organism ui-row with switcher',
  node: 'label'
}).Constructor
