'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

// style
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
 * Input element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'input',
  properties: {
    placeholder: new Property({
      render (node) {
        node.placeholder = this.parseValue()
      }
    })
  },
  value:'',
  placeholder: 'Text',

  define: {
    setValue (val, event) {
      this.setKey('value', val, event)
    }
  },

  // css defaults
  ui: {
    name: 'input',
    scheme: 'graylight',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
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
      value () {
        this.value.origin.val = this.value.val
      }
    },

    // data: {
    //   update () {
    //     this.set({
    //       vallue:this.val
    //     })
    //   }
    // },

    touchstart () {
      this.node.focus()
    }
  }
}).Constructor