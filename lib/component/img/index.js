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
      var node = this.node
      if (node) {
        let val = this.val
        if (typeof val !== 'object') {
          node.src = val
        }
      }
    }
  }
}).Constructor
