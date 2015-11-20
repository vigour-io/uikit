'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Seperator elements
 * @memberOf UIKit
 */

module.exports.Br = new Element({
  node: 'br',
  css: 'ui-br'
}).Constructor

module.exports.DoubleBr = new Element({
  node: 'br',
  css: 'ui-br double'
}).Constructor

module.exports.Hr = new Element({
  node: 'hr',
  css: 'ui-hr'
}).Constructor
