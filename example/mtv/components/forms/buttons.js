var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Buttons:'),
  node: 'section',

  sizes: {
    title: new ui.P('Button sizes:'),
    large: new ui.Button({
      val: 'Large',
      on: {
        click() {
          app.set({

          })
        }
      }
    }),
    big: new ui.Button('Big'),
    medium: new ui.Button('Medium'),
    small: new ui.Button('Small'),
  },

  colors: {
    title: new ui.P('Button colors:'),

    'ui-primary': new ui.Button(),
    'ui-secondary': new ui.Button('Secondary'),
    'ui-tertiary': new ui.Button('Tertiary'),
    'ui-grayscale-light': new ui.Button('Grayscale Light'),
    'ui-grayscale-dark': new ui.Button('Grayscale Dark'),
    'ui-blackwhite': new ui.Button('Black n White'),
  },

  types: {
    title: new ui.P('Button types:'),

    aside: new ui.Button('Register').set({
      css: {
        addClass: 'big ui-tertiary aside-button'
      }
    }),
    withIcon: new ui.Button('Register').set({
      css: {
        addClass: 'big ui-tertiary'
      },
      text: 'Next',
      facebook: new ui.Icon('right')
    }),
    iconic: new ui.Button('Register').set({
      css: {
        addClass: 'big ui-tertiary iconic'
      },
      text: '',
      facebook: new ui.Icon('right')
    })
  }
})
