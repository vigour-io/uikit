'use strict'

// dependencies
var Element = require('../../element')
var Property = require('vigour-element/lib/property')

// style
require('vigour-scratch')
require('./style.less')

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
    }),

    autofocus: new Property({
      render (node) {
        node.autofocus = this.parseValue()
      }
    }),

    disabled: new Property({
      render (node) {
        node.disabled = this.parseValue()
      }
    }),

    readonly: new Property({
      render (node) {
        node.readonly = this.parseValue()
      }
    })
  },

  value: '',
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

    touchstart () {
      this.node.focus()
    }
  }
}).Constructor
