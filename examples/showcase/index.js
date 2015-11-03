'use strict'

require('./style.less')

var Element = require('element')

var app = new Element({
  node: document.body
})

var uikit = require('~/lib')

app.set({
  header: require('./components/header')
})