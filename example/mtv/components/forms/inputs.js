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
  node: 'section',

  title: new ui.H5('Inputs:'),

  sizes: {
    title: new ui.P('Input sizes:'),

    item0: new ui.Input({
      text: binded,
      ui: {
        size: 'large'
      }
    }),

    item1: new ui.Input({
      text: binded,
      ui: {
        size: 'big'
      }
    }),

    item2: new ui.Input({
      text: binded,
      ui: {
        size: 'medium'
      }
    }),

    item3: new ui.Input({
      text: binded,
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Input colors:'),

    item0: new ui.Input({
      ui: {
        scheme: 'primary'
      }
    }),
    item1: new ui.Input({
      ui: {
        scheme: 'secondary'
      }
    }),
    item2: new ui.Input({
      ui: {
        scheme: 'tertiary'
      }
    }),
    item3: new ui.Input({
      ui: {
        scheme: 'quaternary'
      }
    }),
    item4: new ui.Input({
      ui: {
        scheme: 'quinary'
      }
    }),
    item5: new ui.Input({
      ui: {
        scheme: 'blackwhite'
      }
    })
  }
})
