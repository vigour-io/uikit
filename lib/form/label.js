'use strict'
var Element = require('vigour-element')
var Input = require('./input')
var Icon = require('../icon')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Label element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'label',
  css: 'ui-label ui-molecule'
}).Constructor