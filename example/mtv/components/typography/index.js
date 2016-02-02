'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

module.exports = exports = new Element({
  type: 'section',
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
