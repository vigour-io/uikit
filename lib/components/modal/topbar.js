'use strict'
var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Topbar
 */
module.exports.Topbar = new Element({
  css: 'ui-molecule ui-topbar'
}).Constructor


/**
 * Topbar
 */
module.exports.Bottombar = new Element({
  css: 'ui-molecule ui-bottombar'
}).Constructor
