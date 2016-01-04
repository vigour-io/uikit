'use strict'

// dependencies
var Element = require('../element')

// style
require('vigour-scratch')

/**
 * Paragraphs
 * @memberOf UIKit
 */
module.exports = new Element({
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
