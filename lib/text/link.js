'use strict'

// dependencies
var Element = require('../element')

/**
 * Links
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'a',
  inject: [
    require('vigour-element/lib/property/href'),
    require('vigour-element/lib/property/target')
  ],
  css: {
    name: 'link',
    atomic: 'atom'
  }
}).Constructor
