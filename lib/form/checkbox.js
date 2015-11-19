'use strict'
var Element = require('vigour-element')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-select ui-atom',
  node: 'label',
  options: {
    node: 'select',
    ChildConstructor:new Element({
      node:'option'
    }).Constructor,
    placeholder: {
      attributes: {
        disabled: 'disabled',
        selected: 'selected',
        value:''
      },
      text: 'Select your option'
    },
    on: {
      change: {
        dirty() {
          this.setKey('css', {
            addClass: 'ui-dirty'
          })
        }
      }
    }
  },
  down: new Icon('bottom ui-additional')
}).Constructor
