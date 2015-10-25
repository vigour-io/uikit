'use strict'

require('./style.less')

var Element = require('element')

var app = new Element({
  node: document.body
})

var uikit = require('../lib')

app.set({
  input: new uikit.Input(),
  badge: new uikit.Badge({
    label: { text: 'label' },
    message: { text: 'messge' }
  })
})
