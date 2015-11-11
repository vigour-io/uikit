'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-input',
  node: 'input',
  // attributes: {
  //   value: ''
  // },
  on: {
    data (data, event) {
      var node = this.node
      node.value = this.val
    },
    keyup (data, event) {
      if (this.$subscribe) {
        this.$subscribe.origin.set(this.node.value)
      } else {
        this.origin.set(this.node.value)
      }
    }
  }
}).Constructor
