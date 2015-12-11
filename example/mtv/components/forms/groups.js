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
  title: new ui.H5('Form Groups:'),
  node: 'section',

  withButton: {
    title: new ui.P('With Button:'),

    group: new ui.FormGroup({
      input: new ui.Input('Input'),
      button: new ui.Button('Button')
    })
  },

  br0: new ui.DoubleBr(),

  withLabelAndIcon: {
    title: new ui.P('With Label and iconic Button:'),
    group: new ui.FormGroup({
      label: new ui.Label({
        css: {
          addClass: 'ui-blackwhite'
        },
        caption: {
          text: 'Search:'
        },
        input: new ui.Input()
      }),

      button: new ui.Button({
        css: {
          addClass: 'ui-primary iconic'
        },
        text: '',
        facebook: new ui.Icon('search')
      })
    })
  },

  br1: new ui.DoubleBr(),

  withButtonAndSwitcher: {
    title: new ui.P('With Switcher, Label and iconic Button:'),

    group: new ui.FormGroup({
      switcher: new ui.Switcher({
        css: {
          addClass: 'ui-secondary'
        }
      }),

      label: new ui.Label({
        css: {
          addClass: 'ui-primary'
        },
        caption: new ui.Icon('email'),
        input: new ui.Input()
      }),

      button: new ui.Button({
        css: {
          addClass: 'ui-secondary'
        },
        text: 'Subscribe'
      })
    })
  }
})
