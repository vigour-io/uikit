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
    atomic: 'atom',
    $transform: function (val) {
      var icon = (this.parent.icon ? this.parent.icon.val : this.parent.val)
      if (typeof icon !== 'string') {
        return val
      }
      let iconcss = `icon-${icon}`
      if (typeof val !== 'string') {
        return iconcss
      }
      return val + ' ' + iconcss
    }
  },

  // remove this special its just an icon
  properties: {
    icon: new Property({
      render () {} // make this nicer! why not just a thing in css?
    })
  }
  // on: {
  //   data (data, event) {
  //     // dont rly have a node at all unfurtunately
  //     this.patch()
  //   }
  // }
}).Constructor
