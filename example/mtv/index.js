'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

require('./less/imports.less')
require('./config.less')
require('./style.less')

var app = new Element({
  node: document.body
})

var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll/top'),
  require('vigour-element/lib/property/scroll/left'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/events/click')
)

app.set({
  header: require('./components/header'),
  container: {
    css: 'main',

    components: {
      title: new ui.H3('Components:'),
      node: 'section',

      lists: {
        title: new ui.H5('List items:'),
        node: 'section',

        listsTitle: new ui.P('Aside items:'),
        aside: require('./components/lists').lists,

        formsTitle: new ui.P('Form items:'),
        forms: require('./components/lists').forms
      },

      notifications: {
        title: new ui.H5('Notifications:'),
        node: 'section',

        notification: require('./components/notification')
      }
    },

    forms: {
      title: new ui.H3('Forms:'),
      node: 'section',
      inputs: {
        title: new ui.H5('Inputs:'),
        node: 'section',

        sizesCaption: new ui.P('Input sizes:'),
        large: new ui.Input('Large'),
        big: new ui.Input('Big'),
        medium: new ui.Input('Medium'),
        small: new ui.Input('Small'),

        colorCaption: new ui.P('Input colors:'),
        'ui-primary': new ui.Input('Primary'),
        'ui-secondary': new ui.Input('Secondary'),
        'ui-tertiary': new ui.Input('Tertiary'),
        'ui-grayscale-light': new ui.Input('Grayscale Light'),
        'ui-grayscale-dark': new ui.Input('Grayscale Dark'),
        'ui-blackwhite': new ui.Input('Black n White')
      },

      selects: {
        title: new ui.H5('Selects:'),
        node: 'section',

        colorCaption: new ui.P('Select colors:'),
        'ui-primary': new ui.Select({
          options:{
            one:{
              text:'Nika Baller'
            },
            two:{
              text:'Youzi Shiner'
            }
          }
        }),
        'ui-secondary': new ui.Select(),
        'ui-tertiary': new ui.Select(),
        'ui-blackwhite': new ui.Select(),
      },

      labels: {
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
      },

      buttons: {
        title: new ui.H5('Buttons:'),
        node: 'section',

        sizes: {
          title: new ui.P('Button sizes:'),
          large: new ui.Button({
            val:'Large',
            on:{
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
      },

      switchers: {
        title: new ui.H5('Switcher:'),
        node: 'section',

        switcher: new ui.Switcher(),

        sizes: {
          title: new ui.P('Switcher sizes:'),
          'ui-large': new ui.Switcher({
            css: {
              addClass: 'ui-large'
            }
          }),
          'ui-big': new ui.Switcher({
            css: {
              addClass: 'ui-big'
            }
          }),
          'ui-medium': new ui.Switcher(),
          'ui-small': new ui.Switcher({
            css: {
              addClass: 'ui-small'
            }
          })
        },

        colors: {
          title: new ui.P('Switcher colors:'),
          'ui-primary': new ui.Switcher(),
          'ui-secondary': new ui.Switcher(),
          'ui-tertiary': new ui.Switcher(),
          'ui-quaternary': new ui.Switcher(),
          'ui-quinary': new ui.Switcher(),
          'ui-grayscale-dark': new ui.Switcher(),
          'ui-grayscale-light': new ui.Switcher(),
          'ui-blackwhite': new ui.Switcher()
        }
      },

      formGroups: {
        title: new ui.H5('Form Groups:'),
        node: 'section',

        formGroup: {
          css: 'ui-form-group',
          input: new ui.Input('Input'),
          button: new ui.Button('Button')
        },

        br: new ui.Br(),

        formGroupWithIcon: {
          css: 'ui-form-group',
          label: new ui.Label({
            caption: {
              text: 'Search'
            },
            css: {
              addClass: 'ui-blackwhite'
            },
            caption: {
              text: 'Caption:'
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
        }
      }
    },

    hr: new ui.Hr(),

    // colors: {
    //   title: new ui.H3('Colors:'),
    //   node: 'section'
    //   // 'ui-primary': '',
    //   // 'ui-grayscale': '',
    //   // other: ''
    // },

    // colorsSchemes: {
    //   title: new ui.H3('Color models (schemes):'),
    //   node: 'section'
    //   // 'ui-primary': '',
    //   // 'ui-secondary': '',
    //   // 'ui-tertiary': '',
    //   // 'ui-grayscale': ''
    // },

    typography: require('./components/typography')
  }
})
