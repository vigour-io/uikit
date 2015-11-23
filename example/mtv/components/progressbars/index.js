'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/css/animationEnd')
)

module.exports = new Element({
  title: new ui.H5('Progress bars:'),
  node: 'section',

  text: require('./style.less'),

  progressbar: {
    title: new ui.P('Default:'),
    progressbar: new ui.Progressbar({
      state: 80
    })
  },

  colors: {
    title: new ui.P('Colors:'),
    'ui-secondary': new ui.Progressbar({
      state: Math.random() * 100
    }),
    'ui-tertiary': new ui.Progressbar({
      state: Math.random() * 100
    }),
    'ui-quaternary': new ui.Progressbar({
      state: Math.random() * 100
    }),
    'ui-quinary': new ui.Progressbar({
      state: Math.random() * 100
    }),
    'ui-blackwhite': new ui.Progressbar({
      state: Math.random() * 100
    })
  }
})
