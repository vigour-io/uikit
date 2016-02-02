'use strict'

// dependencies
var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')
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
  type: 'i',
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
    icon: new Observable()
  }
  // on: {
  //   data (data, event) {
  //     // dont rly have a node at all unfurtunately
  //     this.patch()
  //   }
  // }
}).Constructor
