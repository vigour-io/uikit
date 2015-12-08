'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')
var Icon = require('../icon')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-select ui-atom ui-form-element',
  node: 'label',

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
