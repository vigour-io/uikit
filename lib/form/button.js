'use strict'
var Element = require('vigour-element')

/**
 * Button element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'button',
  css: 'ui-button ui-atom',
  text: 'Button',
  on: {
    change() {
      this.setKey('css', {
        addClass: 'ui-dirty'
      })
    }
  }
}).Constructor
