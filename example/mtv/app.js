'use strict'
var App = require('vigour-element/lib/app')
var Element = require('vigour-element')
App.set({

  html: new Element({
    type:'html',
    head: {
      type: 'head',
      script: {
        type: 'script',
        src: 'nika'
      }
    },
    nika: new Element({
      type: 'article'
      // text: 'yo'
    })
  })
})
module.exports = App
