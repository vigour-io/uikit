'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Button element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'button',

  // css defaults
  ui: {
    name: 'button',
    color: 'primary',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  text: 'Button',
  on: {
    click: {
      ui () {
        this.setKey('ui', {
          state: 'dirty'
        })
      }
    }
  }
}).Constructor
