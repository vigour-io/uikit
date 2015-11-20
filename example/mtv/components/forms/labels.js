var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Labels:'),
  node: 'section',

  labelsCaption: new ui.P('Simple labels:'),
  label: new ui.Label({
    caption: {
      text: 'Caption:'
    },
    input: new ui.Input()
  }),
  'ui-secondary': new ui.Label({
    caption: {
      text: 'Caption:'
    },
    input: new ui.Input()
  }),
  'ui-blackwhite': new ui.Label({
    caption: {
      text: 'Caption:'
    },
    input: new ui.Input()
  }),

  labelsWithIconsCaption: new ui.P('Labels with Icons:'),
  labelWithIcons: {
    css: 'ui-label ui-primary',
    node: 'label',
    caption: new ui.Icon('email'),
    input: new ui.Input({
      attributes: {
        placeholder: 'E-mail',
        type: 'email'
      }
    })
  },
  labelWithIcons2: {
    css: 'ui-label ui-tertiary',
    node: 'label',
    caption: new ui.Icon('locked'),
    input: new ui.Input({
      attributes: {
        placeholder: 'Password',
        type: 'password'
      }
    })
  }
})
