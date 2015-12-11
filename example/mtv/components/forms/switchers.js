require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var Observable = require('vigour-js/lib/observable')
var binded = new Observable(true)

module.exports = new Element({
  title: new ui.H5('Switcher:'),
  node: 'section',

  switcher: new ui.Switcher({
    state: binded
  }),

  sizes: {
    title: new ui.P('Switcher sizes:'),
    0: new ui.Switcher({
      ui: {
        size: 'large'
      }
    }),
    1: new ui.Switcher({
      ui: {
        size: 'big'
      }
    }),
    2: new ui.Switcher({
      ui: {
        size: 'medium'
      }
    }),
    3: new ui.Switcher({
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Switcher colors:'),

    0: new ui.Switcher({
      state: binded,
      ui: {
        color: 'primary'
      }
    }),

    1: new ui.Switcher({
      state: binded,
      ui: {
        color: 'secondary'
      }
    }),

    2: new ui.Switcher({
      state: binded,
      ui: {
        color: 'tertiary'
      }
    }),

    3: new ui.Switcher({
      state: binded,
      ui: {
        color: 'quaternary'
      }
    }),

    4: new ui.Switcher({
      state: binded,
      ui: {
        color: 'quinary'
      }
    }),

    5: new ui.Switcher({
      state: binded,
      ui: {
        color: 'grayscale-dark'
      }
    }),

    6: new ui.Switcher({
      state: binded,
      ui: {
        color: 'grayscale-light'
      }
    })
  }
})
