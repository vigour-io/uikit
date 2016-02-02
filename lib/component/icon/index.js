'use strict'
// dependencies
// var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

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
  properties: {
    // refactor this not nessecary!
    icon: new Property()
  }
}).Constructor
