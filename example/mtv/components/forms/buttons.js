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
      },

      on: {
        click () {
          // app.set()
        }
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

    'ui-primary': new ui.Button(),
    'ui-secondary': new ui.Button('Secondary'),
    'ui-tertiary': new ui.Button('Tertiary'),
    'ui-grayscale-light': new ui.Button('Grayscale Light'),
    'ui-grayscale-dark': new ui.Button('Grayscale Dark'),
    'ui-blackwhite': new ui.Button('Black n White')
  },

  types: {
    title: new ui.P('Button types:'),

    italic: new ui.Button().set({
      css: {
        addClass: 'ui-big ui-tertiary italic-button'
      }
    }),
    withIcon: new ui.Button('Register').set({
      css: {
        addClass: 'ui-big ui-tertiary'
      },
      text: 'Next',
      icon: new ui.Icon('right')
    }),
    iconic: new ui.Button('Register').set({
      css: {
        addClass: 'ui-big ui-tertiary iconic'
      },
      text: '',
      icon: new ui.Icon('right')
    })
  }
})
