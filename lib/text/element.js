'use strict'

// dependencies
var Element = require('../element')

// style
require('vigour-scratch')

/**
 * Paragraphs
 * @memberOf UIKit
 */
module.exports = new Element({
  text () {
    return this.parent.val
  },
  on: {
    data (data, event) {
      let node = this.node
      if (node) {
        this.text.render(node, event, this)
      }
    }
  }
}).Constructor
