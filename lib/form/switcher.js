'use strict'
var Element = require('vigour-element')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-switcher ui-atom',
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
