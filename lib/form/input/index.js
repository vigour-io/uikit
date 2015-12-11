'use strict'

// dependencies
var Element = require('vigour-element')

// style
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

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
        // lets do sub on .val
        this.text.origin.val = this.node.value
      }
    }
  }
}).Constructor
