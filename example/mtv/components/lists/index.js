'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/order'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/property')
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
        add: 'ui-arrow'
      },
      caption: {
        title: new ui.H5('Language')
      }
    }),
    2: new ui.Row({
      css: {
        add: 'ui-active ui-arrow'
      },
      caption: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            add: 'ui-additional'
          }
        })
      }
    }),
    3: new ui.Row({
      css: {
        add: 'ui-arrow'
      },
      icon: new ui.Icon('menu'),
      caption: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            add: 'ui-additional'
          }
        })
      }
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
        input: new ui.Email({
          css: {
            scheme: 'secondary',
            inverse: true
          }
        })
      }
    }),
    1: new ui.LabelRow({
      label: {
        caption: new ui.Icon('locked'),
        input: new ui.Password({
          css: {
            scheme: 'secondary',
            inverse: true
          }
        })
      }
    }),
    2: new ui.LabelRow({
      label: {
        caption: new ui.Icon('gender'),
        input: new ui.Select({
          css: {
            scheme: 'secondary',
            inverse: true
          },
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
          css: {
            scheme: 'secondary',
            inverse: true
          },
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
    4: new ui.SwitcherRow({
      icon: new ui.Icon('newsletter'),
      caption: {
        title: new ui.H5('Newsletter'),
        subtitle: new ui.H8({
          text: 'We will never send you spam!',
          css: {
            add: 'ui-additional'
          }
        })
      },
      switcher: new ui.Switcher()
    }),
    10: new ui.Button({
      css: {
        add: 'ui-large ui-scheme-tertiary ui-interactive ui-modal-button'
      }
    })
  }
})
