'use strict'

// dependencies
var Element = require('vigour-element')

// style
require('vigour-scratch')

/**
 * Paragraphs
 * @memberOf UIKit
 */
module.exports = new Element({
  inject: [
    require('vigour-element/lib/property/text'),
    require('vigour-element/lib/property/css'),
    require('../property')
  ],
  text: '',
  on: {
    data (d, event) {
      var data = this.val
      if (typeof data === 'string') {
        this.text.val = this.val
      }
    }
  }
}).Constructor
