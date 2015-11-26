'use strict'
var Element = require('vigour-element')
/**
 * Paragraphs
 * @memberOf UIKit
 */

module.exports = new Element({
  inject: [
    require('vigour-element/lib/property/text'),
    require('vigour-element/lib/property/css')
  ],
  text: '',
  on: {
    data: function (data, event) {
      if (typeof data !== 'object') {
        this.text.val = data
      }
    }
  }
}).Constructor
