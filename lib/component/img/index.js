'use strict'

// dependencies
var Element = require('vigour-element')

/**
 * Img
 */
module.exports = new Element({
  type: 'img',
  css: {
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
