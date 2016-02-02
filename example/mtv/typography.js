'use strict'
// require('./less/style.less')

var app = require('./app')
var ui = require('../../lib')

app.set({
  // somethign rly strange with re-requiring this header here!

  // header: require('./components/header'),
  container: new ui.Container({
    css: {
      add: 'main'
    },
    typography: require('./components/typography')
  })
})
