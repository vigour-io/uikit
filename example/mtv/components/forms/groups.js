require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Form Groups:'),
  node: 'section',

  formGroup: new ui.Group({
    input: new ui.Input('Input'),
    button: new ui.Button('Button')
  }),

  br2: new ui.DoubleBr(),

  formGroupWithIcon: new ui.Group({
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

  formGroupWithButton: new ui.Group({
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
