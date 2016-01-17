'use strict'

// components
var Icon = require('../icon')
var Button = require('../../form/button')

module.exports = new Button({
  ui: {
    type: 'iconic'
  },
  text: '',
  close: new Icon('close')
}).Constructor
