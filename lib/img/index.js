'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var Img = new Element({
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

/**
 * Img
 */
module.exports.Img = Img

/**
 * Thumb
 */
module.exports.Thumb = new Element({
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
