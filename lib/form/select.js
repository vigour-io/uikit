'use strict'
var Element = require('vigour-element')
var Icon = require('../icon')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-select',
  node: 'label',
  options: {
    node: 'select',
    title: {
      attributes: {
        disabled: 'disabled',
        selected: 'selected',
      },
      text: 'Select your option',
      val: ''
    },
    on: {
      change() {
        this.parent.setKey('css', {
          addClass: 'ui-dirty'
        })
      }
    }
  },
  down: new Icon('bottom-nav')
}).Constructor
