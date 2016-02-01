'use strict'

// style
require('./style.less')

// dependencies
var Element = require('../../element')
var Property = require('vigour-element/lib/property')

/**
 * Input element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'input',

  // css defaults
  css: {
    name: 'input',
    scheme: 'graylight',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  // TODO: add type property
  properties: {
    placeholder: new Property({
      render (node) {
        node.placeholder = this.parseValue()
      }
    }),

    autofocus: new Property({
      render (node) {
        // TODO: it breaks switcher sliding
        // if (!this.lookUp('switcher')) {
        //   node.autofocus = this.parseValue()
        //   return
        // }

        var focus = setTimeout(function () {
          node.focus()
          clearTimeout(focus)
        }, 400)
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

  on: {
    change: {
      ui () {
        this.setKey('css', {
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
