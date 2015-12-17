'use strict'

// components
var Icon = require('../icon')
var Button = require('../../form/button')

module.exports = new Button({
  ui: {
    type: 'iconic'
  },
  text: '',
  close: new Icon('close'),
  on: {
    click: {
      close () {
        var parent = this.parent

        parent.setKey('ui', {
          animate: 'fade-out'
        })

        parent.on('animationEnd', function () {
          this.remove()
        })
      }
    }
  }
}).Constructor
