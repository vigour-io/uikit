'use strict'

// dependencies
var Element = require('../../element')

// style
require('./style.less')

/**
 * Button element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'button',

  // css defaults
  css: {
    name: 'button',
    scheme: 'primary',
    inverse: true,
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  text: 'Button',
  on: {
    click: {
      css () {
        this.setKey('css', {
          state: 'dirty'
        })
      }
    }
  }
}).Constructor
