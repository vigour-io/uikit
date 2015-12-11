'use strict'

// dependencies
var Element = require('vigour-element')

// style
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Input element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'input',
  text: '',

  attributes: {
    placeholder: 'Text'
  },

  // css defaults
  ui: {
    name: 'input',
    color: 'grayscale-light-inverse',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element'
  },

  on: {
    change: {
      ui () {
        this.setKey('ui', {
          state: 'dirty'
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
