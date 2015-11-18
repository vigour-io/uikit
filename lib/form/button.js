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
    change() {
      this.setKey('css', {
        addClass: 'ui-dirty'
      })
    }
  }
}).Constructor
