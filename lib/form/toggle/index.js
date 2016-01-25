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
    name: 'toggle',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  properties: {
    state: new Property({
      render (node, event, parent) {
        var checkbox = parent.checkbox
        var checkboxNode = checkbox.node
        if (checkboxNode) {
          checkbox.checked.render(checkboxNode, event, checkbox)
        }
      }
    })
  },

  state: false,

  checkbox: {
    node: 'input',
    properties: {
      checked: new Property({
        render (node, event, parent) {
          node.checked = this.parseValue()
        }
      })
    },
    checked () {
      var state = this.parent.parent.state
      return state.parseValue()
    },
    attributes: {
      type: 'checkbox'
    },
    on: {
      change: {
        ui () {
          var parent = this.parent
          var state = parent.state
          if (state) {
            state.origin.val = this.node.checked
          }
          parent.setKey('css', {
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
