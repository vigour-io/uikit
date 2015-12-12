'use strict'

// dependencies
var Element = require('vigour-element')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Img
 */
module.exports = new Element({
  css: 'ui-img ui-atom',
  node: 'img',
  on: {
    data: function (data, event) {
      if (typeof data !== 'object') {
        this.node.src = data
      }
    }
  }
}).Constructor
