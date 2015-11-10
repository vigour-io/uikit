'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-input',
  node: 'input',
  attributes: {
    placeholder: 'Input'
  },
  on: {
    data: function (event) {
      this.attributes.setKey('placeholder', {
        val: this.val
      })
    }
  }
}).Constructor
