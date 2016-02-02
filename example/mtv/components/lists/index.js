'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

module.exports.lists = new Element({
  type: 'aside',

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
  type: 'aside',
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
              type: 'option',
              text: 'Male'
            },
            female: {
              type: 'option',
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
              type: 'option',
              text: 'Below 18'
            },
            '18to21': {
              type: 'option',
              text: '18 to 21'
            },
            above21: {
              type: 'option',
              text: 'Above 21'
            }
          }
        })
      }
    }),
    4: new ui.ToggleRow({
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
      toggle: new ui.Toggle()
    }),
    10: new ui.Button({
      css: {
        add: 'ui-large ui-scheme-tertiary ui-interactive ui-modal-button'
      }
    })
  }
})
