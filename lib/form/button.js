'use strict'
var Element = require('vigour-element')

/**
 * Button element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'button',
  css: 'ui-button',
  text: 'Button',
  on: {
    data: function (event) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor
