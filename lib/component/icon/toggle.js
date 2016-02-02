'use strict'

// dependencies
var Observable = require('vigour-js/lib/observable')
var Icon = require('./index')

// styles
require('vigour-scratch')
require('./style.less')

// module
module.exports = new Icon({
  properties: {
    toggle: new Observable(),
    original: new Observable()
  },
  on: {
    click () {
      // fix this -- dirty as fuck (context!)
      if (!this.original) {
        this.original = this.val
      }

      var original = this.original
      var toggle = this.toggle
      var val = (this.val === toggle.val) ? original.val : toggle.val

      this.set({
        val: val,
        icon: val,
        css: {
          toggle: `ui-changed`,
          add: 'ui-dirty'
        }
      })
    }
  }
}).Constructor
