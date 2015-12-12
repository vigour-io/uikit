'use strict'

// dependencies
var Element = require('vigour-element')

// styles

require('vigour-scratch')
require('./style.less')

// module
module.exports = new Element({
  inject: require('vigour-element/lib/property/css'),
  node: 'i',
  on: {
    data (data, event) {
      this.setKey('css', {
        val: 'ui-atom ui-icon icon-' + this.val
      })
    }
  }
}).Constructor
