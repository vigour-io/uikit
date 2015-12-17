'use strict'

// components
var Icon = require('../icon')
var Button = require('../../form/button')

module.exports = new Button({
  css: {
    addClass: 'large iconic'
  },
  text: '',
  icon: new Icon('close'),
  on: {
    click: {
      close () {
        var parent = this.parent

        parent.setKey('css', {
          removeClass: 'fade-in-down',
          addClass: 'ui-animated fade-out'
        })

        parent.on('animationEnd', function () {
          this.remove()
        })
      }
    }
  }
}).Constructor
