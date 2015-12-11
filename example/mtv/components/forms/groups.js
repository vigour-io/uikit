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

  title1: new ui.P('With Button:'),

  formGroup: new ui.FormGroup({
    input: new ui.Input('Input'),
    button: new ui.Button('Button')
  }),

  br2: new ui.DoubleBr(),

  title2: new ui.P('With Label and iconic Button:'),
  formGroupWithIcon: new ui.FormGroup({
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
  }),

  br: new ui.DoubleBr(),

  title3: new ui.P('With Switcher, Label and iconic Button:'),

  formGroupWithButton: new ui.FormGroup({
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
})
