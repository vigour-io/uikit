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
  node: 'i',
  on: {
    data (data, event) {
      var val = this.val
      if (val && typeof val === 'string') {
        this.set({
          css: {
            addClass: `icon-${val}`
          }
        })
      }
    }
  }
}).Constructor
