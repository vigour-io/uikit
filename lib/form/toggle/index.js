'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

// styles
require('vigour-scratch')
require('./style.less')

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
      render () {}
      // render (node, event, parent) {
      //   var checkbox = parent.checkbox
      //   var checkboxNode = checkbox.node
      //   if (checkboxNode) {
      //     checkbox.checked.render(checkboxNode, event, checkbox)
      //   }
      // }
    })
  },

  // state: false,

  checkbox: {
    type: 'input',
    properties: {
      checked: new Property({
        val: false,
        render () {}
        // render (node, event, parent) {
        //   node.checked = this.parseValue()
        // }
      })
    },
    attributes: {
      type: 'checkbox'
    },
    // on: {
    //   change: {
    //     ui () {
    //       // var parent = this.parent
    //       // var state = parent.state
    //       // if (state) {
    //       //   state.origin.val = this.node.checked
    //       // }
    //       // parent.setKey('css', {
    //       //   state: 'dirty'
    //       // })
    //     }
    //   }
    // }
  },
  circle: {
    type: 'span'
  }
}).Constructor
