'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/order'),
  require('vigour-element/lib/property/attributes')
)

module.exports.lists = new Element({
  node: 'aside',
  css: 'ui-background-secondary',
  items: {
    0: new ui.Row({
      caption: {
        title: new ui.H5('Language')
      }
    }),
    1: new ui.Row({
      css: {
        addClass: 'with arrow'
      },
      caption: {
        title: new ui.H5('Language')
      }
    }),
    2: new ui.Row({
      css: {
        addClass: 'active with arrow'
      },
      caption: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            addClass: 'ui-additional'
          }
        })
      }
    }),
    3: new ui.Row({
      css: {
        addClass: 'with arrow'
      },
      icon: new ui.Icon('menu'),
      caption: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            addClass: 'ui-additional'
          }
        })
      }
    }),
    4: new ui.SwitcherRow({
      icon: new ui.Icon('newsletter'),
      caption: {
        title: new ui.H5('Newsletter'),
        subtitle: new ui.H8({
          text: 'We will never send you spam!',
          css: {
            addClass: 'ui-additional'
          }
        })
      },
      switcher: new ui.Switcher()
    })
  }
})

module.exports.forms = new Element({
  node: 'aside',
  css: 'ui-background-secondary',
  labels: {
    0: new ui.LabelRow({
      label: {
        caption: new ui.Icon('email'),
        input: new ui.Email()
      }
    }),
    1: new ui.LabelRow({
      label: {
        caption: new ui.Icon('locked'),
        input: new ui.Password()
      }
    }),
    2: new ui.LabelRow({
      label: {
        caption: new ui.Icon('gender'),
        input: new ui.Select({
          options: {
            placeholder: {
              text: 'Gender'
            },
            male: {
              node: 'option',
              text: 'Male'
            },
            female: {
              node: 'option',
              text: 'Female'
            }
          }
        })
      }
    }),
    3: new ui.LabelRow({
      label: {
        caption: new ui.Icon('date'),
        input: new ui.Select({
          options: {
            placeholder: {
              text: 'Select Age'
            },
            below18: {
              node: 'option',
              text: 'Below 18'
            },
            '18to21': {
              node: 'option',
              text: '18 to 21'
            },
            above21: {
              node: 'option',
              text: 'Above 21'
            }
          }
        })
      }
    }),
    10: new ui.Button({
      css: {
        addClass: 'ui-large ui-tertiary ui-modal-button'
      }
    })
  }
})
