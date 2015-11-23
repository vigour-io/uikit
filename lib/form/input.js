'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'input',
  css: 'ui-input ui-atom ui-form-element',
  attributes: {
    placeholder: 'Text'
  },
  on: {
    change: {
      dirty () {
        this.setKey('css', {
          addClass: 'ui-dirty'
        })
      }
    },
    input: {
      text () {
        if (this.text) {
          this.text.origin.val = this.node.value
        }
      }
    }
  }
}).Constructor
