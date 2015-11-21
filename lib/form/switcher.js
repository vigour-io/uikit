'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-switcher ui-atom ui-form-element',
  properties: {
    state: new Observable({
      on: {
        data () {
          // console.log(this.parent)
          this.parent.checkbox.node.checked = this.val
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
        dirty() {
          this.parent.setKey('css', {
            addClass: 'ui-dirty'
          })
        }
      }
    }
  },
  circle: {
    node: 'span'
  }
}).Constructor
