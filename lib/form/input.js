'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-input',
  node: 'input',
  on: {
    data (data, event) {
      var node = this.node
      var value = this.val
      if (node.value !== value) {
        node.value = value
      }
    },
    keyup (data, event) {
      var $subscribe = this.$subscribe
      var nodevalue = this.node.value
      if ($subscribe) {
        $subscribe.origin.set(nodevalue)
      } else {
        this.origin.set(nodevalue)
      }
    }
  }
}).Constructor
