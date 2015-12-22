'use strict'

// dependencies
var Element = require('vigour-element')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../property')
)

// styles
require('vigour-scratch')
require('./style.less')

// module
module.exports = new Element({
  ui: {
    name: 'icon',
    atomic: 'atom'
  },
  val: '',
  node: 'i',
  on: {
    data (data, event) {
      if (this.val) {
        this.setKey('css', {
          addClass: `icon-${this.val}`
        })
      }
    }
  }
}).Constructor
