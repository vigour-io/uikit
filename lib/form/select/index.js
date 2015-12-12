'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

// styles
require('vigour-scratch')
require('./style.less')

// components
var Icon = require('../../components/icon')

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
  node: 'label',

  // css defaults
  ui: {
    name: 'select',
    color: 'grayscale-light-inverse',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  properties: {
    placeholder: new Observable({
      on: {
        data () {
          if (this.parent.options.placeholder) {
            this.parent.options.placeholder.text.val = this.val
          }
        }
      }
    })
  },

  options: {
    node: 'select',

    ChildConstructor: new Element({
      node: 'option'
    }).Constructor,

    placeholder: {
      attributes: {
        disabled: 'disabled',
        selected: 'selected',
        value: ''
      },
      text: 'Select your option'
    },

    on: {
      change: {
        dirty () {
          this.parent.setKey('css', {
            addClass: 'ui-dirty'
          })
        }
      }
    }
  },

  down: new Icon('bottom ui-additional')
}).Constructor