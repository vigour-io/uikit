'use strict'

require('./less/style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

var app = new Element({
  node: document.body
})

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/event/click')
)

app.set({
  header: require('./components/header'),
  container: new ui.Container({
    css: {
      addClass: 'main'
    },

    typography: require('./components/typography')
  })
})
