'use strict'

// dependencies
var Element = require('../../element')
var Property = require('vigour-element/lib/property')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/attributes')
)

/**
 * Select element
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  css: {
    name: 'switcher',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  properties: {
    state: new Property({
      render () {
        // this.parent.checkbox.node.checked = this.val
      }
      // on: {
      //   data: {
      //     ui () {
      //       this.parent.checkbox.node.checked = this.val
      //     }
      //   }
      // }
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
