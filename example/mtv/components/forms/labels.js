require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

module.exports = new Element({
  node: 'section',

  title: new ui.H5('Labels:'),

  labels: {
    title: new ui.P('Simple labels:'),

    item0: new ui.Label({
      caption: {
        text: 'Caption:'
      },
      input: new ui.Input()
    }),

    item1: new ui.Label({
      ui: {
        scheme: 'tertiary'
      },
      caption: {
        text: 'Caption:'
      },
      input: new ui.Input()
    }),

    item2: new ui.Label({
      ui: {
        scheme: 'quinary'
      },
      caption: {
        text: 'Caption:'
      },
      input: new ui.Input()
    })
  },

  iconLabels: {
    title: new ui.P('Labels with Icons:'),

    item0: new ui.Label({
      ui: {
        scheme: 'primary'
      },
      caption: new ui.Icon('email'),
      input: new ui.Email()
    }),

    item1: new ui.Label({
      ui: {
        scheme: 'secondary'
      },
      caption: new ui.Icon('locked'),
      input: new ui.Password()
    })
  }
})
