require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')


module.exports = new Element({
  type: 'section',

  title: new ui.H5('Form Groups:'),

  withButton: {
    title: new ui.P('With Button:'),

    group: new ui.FormGroup({
      input: new ui.Input('Input'),
      button: new ui.Button('Button')
    })
  },

  withLabelAndIcon: {
    title: new ui.P('With Label and iconic Button:'),

    group: new ui.FormGroup({
      label: new ui.Label({
        css: {
          scheme: 'blackwhite',
          inverse: true
        },
        caption: {
          text: 'Search:'
        },
        input: new ui.Input()
      }),

      button: new ui.Button({
        css: {
          scheme: 'primary iconic',
          inverse: true
        },
        text: '',
        facebook: new ui.Icon('search')
      })
    })
  },

  withButtonAndToggle: {
    title: new ui.P('With Toggle, Label and iconic Button:'),

    group: new ui.FormGroup({
      toggle: new ui.Toggle({
        css: {
          scheme: 'secondary',
          inverse: true
        }
      }),

      label: new ui.Label({
        css: {
          scheme: 'primary',
          inverse: true
        },
        caption: new ui.Icon('email'),
        input: new ui.Input()
      }),

      button: new ui.Button({
        css: {
          scheme: 'secondary',
          inverse: true
        },
        text: 'Subscribe'
      })
    })
  }
})
