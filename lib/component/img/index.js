'use strict'

// dependencies
var Element = require('vigour-element')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Img
 */
module.exports = new Element({
  node: 'img',

  ui: {
    name: 'img',
    atomic: 'atom'
  },

  on: {
    data (data, event) {
      this.setKey('src', this.val, event)
      // var val = this.val
      // if (typeof val !== 'object') {
      //   this.node.src = val
      // }
    }
  }
}).Constructor
