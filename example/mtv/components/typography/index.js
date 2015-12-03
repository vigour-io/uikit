'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = exports = new Element({
  title: new ui.H3('Typography:'),
  node: 'section',

  sansSerif: require('./sans-serif')

  // hr: new ui.Hr({
  //   css: {
  //     addClass: 'double'
  //   }
  // }),

  // serif: require('./serif'),

  // hr2: new ui.Hr({
  //   css: {
  //     addClass: 'double'
  //   }
  // }),

// monospace: require('./monospace')
})
