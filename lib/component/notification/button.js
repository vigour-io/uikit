'use strict'

// components
var Icon = require('../icon')
var Button = require('../../form/button')

module.exports = new Button({
  css: {
    type: 'iconic'
  },
  text: '',
  close: new Icon('close')
}).Constructor
