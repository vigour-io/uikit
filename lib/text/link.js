'use strict'

// dependencies
var Element = require('vigour-element')

/**
 * Links
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'a',
  inject: [
    require('vigour-element/lib/property/href'),
    require('vigour-element/lib/property/target')
  ],
  css: {
    name: 'link',
    atomic: 'atom'
  }
}).Constructor
