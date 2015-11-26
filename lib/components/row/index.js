'use strict'
var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Row
 */
module.exports.Row = new Element({
  css: 'ui-organism ui-row'
}).Constructor

/**
 * Label Row
 */
module.exports.LabelRow = new Element({
  css: 'ui-organism ui-row with label',
  label: new ui.Label()
}).Constructor

/**
 * Switcher Row
 */
module.exports.SwitcherRow = new Element({
  css: 'ui-organism ui-row with switcher',
  node: 'label'
}).Constructor
