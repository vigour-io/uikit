require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = new Element({
  title: new ui.H5('Buttons:'),
  node: 'section',

  sizes: {
    title: new ui.P('Button sizes:'),

    0: new ui.Button({
      ui: {
        size: 'large'
      }
    }),
    1: new ui.Button({
      ui: {
        size: 'big'
      }
    }),
    2: new ui.Button({
      ui: {
        size: 'medium'
      }
    }),
    3: new ui.Button({
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Button colors:'),

    0: new ui.Button({
      ui: {
        color: 'primary'
      }
    }),

    1: new ui.Button({
      ui: {
        color: 'secondary'
      }
    }),

    2: new ui.Button({
      ui: {
        color: 'tertiary'
      }
    }),

    3: new ui.Button({
      ui: {
        color: 'grayscale-light'
      }
    }),

    4: new ui.Button({
      ui: {
        color: 'grayscale-dark'
      }
    }),

    5: new ui.Button({
      ui: {
        color: 'blackwhite'
      }
    })
  },

  types: {
    title: new ui.P('Button types:'),

    italic: new ui.Button({
      ui: {
        color: 'tertiary',
        size: 'big',
        type: 'italic-button'
      }
    }),
    withIcon: new ui.Button({
      ui: {
        size: 'big',
        color: 'tertiary'
      },
      text: 'Next',
      icon: new ui.Icon('right')
    }),
    iconic: new ui.Button('Register').set({
      ui: {
        size: 'big',
        color: 'tertiary',
        type: 'iconic'
      },
      text: '',
      icon: new ui.Icon('right')
    })
  }
})
