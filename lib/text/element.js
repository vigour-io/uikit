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
    console.error(this.parent.val)
    return this.parent.val
  },
  on: {
    data:{
      element (data, event) {
        let node = this.node
        if (node && typeof this.val === 'string') {
          this.text.render(node, event, this)
        }
      }
    }
  }
}).Constructor
