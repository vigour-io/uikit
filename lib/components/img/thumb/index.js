'use strict'

// dependencies
var Element = require('vigour-element')

// components
var Img = require('../index')

// styles
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Thumb
 */
module.exports = new Element({
  css: 'ui-thumb ui-molecule',
  node: 'figure',
  img: new Img(),
  on: {
    data: function (data, event) {
      if (typeof data !== 'object') {
        this.img.node.src = data
      }
    }
  }
}).Constructor
