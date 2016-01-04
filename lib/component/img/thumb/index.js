'use strict'

// dependencies
var Element = require('vigour-element')

// components
var Img = require('../index')

// styles
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../../property')
)

/**
 * Thumb
 */
module.exports = new Element({
  node: 'figure',

  ui: {
    name: 'thumb',
    atomic: 'molecule'
  },

  img: new Img(),
  on: {
    data (data, event) {
      var val = this.val
      if (this && typeof val !== 'object') {
        this.set({img: val}, event)
      }
    }
  }
}).Constructor
