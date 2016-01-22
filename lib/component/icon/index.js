'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')
// properties
// Element.prototype.inject(
//   require('vigour-element/lib/property/css'),
//   require('../../property')
// )

// styles
require('vigour-scratch')
require('./style.less')

// module
module.exports = new Element({
  node: 'i',
  css: {
    name: 'icon',
    atomic: 'atom'
  },
  css: {
    $transform: function (val) {
      var icon = (this.parent.icon ? this.parent.icon.val : this.parent.val)
      if (typeof icon !== 'string') {
        return val
      }
      return val + ` icon-${icon}`
    }
  },
  properties: {
    icon: new Property({
      render (node, event, element) {
        this.parent.css.render(node, event, element)
      }
    })
  },
  on: {
    data (data, event) {
      var node = this.getNode()
      if (node) {
        this.css.render(node, event, this)
      }
    }
  }
}).Constructor
