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
        // this is rly rly wrong here! breaks server side rendering (no maniupulation else oyure screwed in context)
        var str = this.css.val
        //str + '
        this.set({
          css: 'icon-' + this.val
        }, false)
        // this.setKey('css', {
          // addClass: `icon-${this.val}`
        // })
      }
    }
  }
}).Constructor
