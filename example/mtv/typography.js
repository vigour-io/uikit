'use strict'

require('./less/style.less')

var app = require('./app')
var Element = require('vigour-element')
var ui = require('../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/event/click')
)

console.log('--- start ---')
app.set({
  thing: new Element({
    text: 'yoyoyoyo',
    thing2: new Element({
      text: 'ballz'
    })
  })
  // header: require('./components/header'),
  // container: new ui.Container({
  //   css: {
  //     addClass: 'main'
  //   },
  //   typography: require('./components/typography')
  // })
})
console.log('--- end --')
