'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('../../property')
)

/**
 * Container component
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  ui: {
    name: 'container',
    size: 'flexible',
    atomic: 'atom'
  }
}).Constructor
