'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Paragraphs
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'p',
  css: 'ui-paragraph',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor