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
    data (data, event) {
      var val = this.parseValue()
      if (typeof val === 'string'){
        this.text.val = val
      }
    }
  }
}).Constructor
