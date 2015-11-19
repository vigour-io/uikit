'use strict'
var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var Img = new Element({
  css: 'ui-img ui-atom',
  node: 'img'
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
  img: new Img()
}).Constructor
