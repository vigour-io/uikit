'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = exports = new Element({
  node: 'section',
  title: new ui.H3('Typography:'),

  sansSerif: require('./sans-serif')

  // hr: new ui.Hr({
  //   css: {
  //     add: 'double'
  //   }
  // }),

  // serif: require('./serif'),

  // hr2: new ui.Hr({
  //   css: {
  //     add: 'double'
  //   }
  // }),

// monospace: require('./monospace')
})
