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

module.exports.Label = new Element({
  css: 'ui-label',
  node: 'label',
  caption: {
    node: 'span',
    text: 'this is label'
  },
  input: new Input()
}).Constructor