'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Select element
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  ui: {
    name: 'switcher',
    scheme: 'grayscale-light-inverse',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  properties: {
    state: new Observable({
      on: {
        data: {
          ui () {
            this.parent.checkbox.node.checked = this.val
          }
        }
      }
    }).Constructor
  },

  checkbox: {
    node: 'input',
    attributes: {
      type: 'checkbox'
    },
    on: {
      change: {
        ui () {
          if (this.parent.state) {
            this.parent.state.origin.val = this.node.checked
          }

          this.parent.setKey('ui', {
            state: 'dirty'
          })
        }
      }
    }
  },
  circle: {
    node: 'span'
  }
}).Constructor
