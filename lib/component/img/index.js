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
  src () {
    return this.parent.val
  },
  on: {
    data (data, event) {
      let node = this.node
      if (node) {
        this.src.render(node, event, this)
      }
    }
  }
}).Constructor
