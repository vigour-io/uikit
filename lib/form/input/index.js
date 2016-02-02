'use strict'

// style
require('./style.less')

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

/**
 * Input element
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'input',

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
      $type: 'string',
      render (val, properties, children) {
        properties.placeholder = val
      }
    }),
    autofocus: new Property({
      // VIRTUAL-DOM NEEDS REFACTOR
      // render (node) {
      //   // TODO: it breaks switcher sliding
      //   // if (!this.lookUp('switcher')) {
      //   //   node.autofocus = this.parseValue()
      //   //   return
      //   // }

      //   var focus = setTimeout(function () {
      //     node.focus()
      //     clearTimeout(focus)
      //   }, 400)
      // }
    }),

    disabled: new Property({
      render (val, properties, children) {
        properties.disabled = val
      }
    }),

    readonly: new Property({
      render (val, properties, children) {
        properties.readonly = val
      }
    })
  },
  value: '',
  placeholder: 'Text',
  on: {
    change: {
      ui () {
        this.set({
          css: {
            state: 'dirty'
          }
        })
      }
    },
    input: {
      value () {
        // VIRTUAL-DOM NEEDS REFACTOR
        // fix origin in props! (input!)
        this.value.origin.val = this.value.val
      }
    },
    touchstart () {
      // VIRTUAL-DOM NEEDS REFACTOR
      // this is wrong
      // this.node.focus()
    }
  }
}).Constructor
