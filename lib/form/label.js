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
  on: {
    data(event) {
      this.caption.setKey('text', {
        val: this.val
      })
    }
  },
  input: new Input()
}).Constructor


module.exports.IconLabel = new Element({
  css: 'ui-label',
  node: 'label',
  caption: new Icon(),
  on: {
    data(event) {
      this.setKey('caption', {
        val: new Icon(this.val)
      })
    }
  },
  input: new Input()
}).Constructor
