require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('uikit/lib/property')
)

var Observable = require('vigour-js/lib/observable')
var binded = new Observable('Observable')

module.exports = new Element({
  title: new ui.H5('Inputs:'),
  node: 'section',

  sizes: {
    title: new ui.P('Input sizes:'),

    0: new ui.Input({
      text: binded,
      ui: {
        size: 'large'
      }
    }),

    1: new ui.Input({
      text: binded,
      ui: {
        size: 'big'
      }
    }),

    2: new ui.Input({
      text: binded,
      ui: {
        size: 'medium'
      }
    }),

    3: new ui.Input({
      text: binded,
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Input colors:'),

    0: new ui.Input({
      ui: {
        scheme: 'primary'
      }
    }),
    1: new ui.Input({
      ui: {
        scheme: 'secondary'
      }
    }),
    2: new ui.Input({
      ui: {
        scheme: 'tertiary'
      }
    }),
    3: new ui.Input({
      ui: {
        scheme: 'quaternary'
      }
    }),
    4: new ui.Input({
      ui: {
        scheme: 'quinary'
      }
    }),
    5: new ui.Input({
      ui: {
        scheme: 'blackwhite'
      }
    })
  }
})
