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
    data (d, event) {
      var data = this.val
      if (typeof data === 'string') {
        this.text.val = this.val
      }
    }
  }
}).Constructor
