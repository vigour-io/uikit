'use strict'

// dependencies
var Element = require('../../element')

/**
 * Textarea element
 * @memberOf UIKit
 */
module.exports = new Element({
  css: {
    name: 'input',
    atomic: 'atom',
    childOf: 'form-element'
  },
  input: {
    node: 'textarea',
    on: {
      keyup () {
        this.text.origin.val = this.node.value
      }
    }
  },
  on: {
    parent: {
      label () {
        // lets do sub on parent.val
        this.label.text.val = this.key
      }
    }
  }
}).Constructor
