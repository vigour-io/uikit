'use strict'

// dependencies
var Observable = require('vigour-js/lib/observable')
var Icon = require('./index')

// styles
module.exports.inject = require('./style.less')

// module
module.exports = new Icon({
  properties: {
    toggle: new Observable()
  },
  on: {
    click () {
      this.css.set({
        toggleClass: `icon-${this.val} icon-${this.toggle.val}`
      })
    }
  }
}).Constructor
