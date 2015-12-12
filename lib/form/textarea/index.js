'use strict'

// dependencies
var Element = require('vigour-element')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Textarea element
 * @memberOf UIKit
 */
module.exports = new Element({
  label: { text: {} },
  css: 'ui-input ui-atom ui-form-element',
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
