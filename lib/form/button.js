'use strict'
var Element = require('vigour-element')

/**
 * Button element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'button',
  css: 'ui-button ui-interactive ui-atom ui-form-element',
  text: 'Button',
  on: {
    click: {
      ui () {
        this.setKey('css', {
          addClass: 'ui-dirty'
        })
      }
    }
  }
}).Constructor
