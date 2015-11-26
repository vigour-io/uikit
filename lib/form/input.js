'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'input',
  css: 'ui-input ui-atom ui-form-element',
  text: '',
  attributes: {
    placeholder: 'Text'
  },
  on: {
    change: {
      ui () {
        this.setKey('css', {
          addClass: 'ui-dirty'
        })
      }
    },
    input: {
      text () {
        this.text.origin.val = this.node.value
      }
    }
  }
}).Constructor
