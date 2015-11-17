'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

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
        primary: new ui.Input('Primary'),
        secondary: new ui.Input('Secondary'),
        tertiary: new ui.Input('Tertiary'),
        'grayscale-light': new ui.Input('Grayscale Light'),
        'grayscale-dark': new ui.Input('Grayscale Dark'),
        blackwhite: new ui.Input('Black n White')
      },

      labels: {
        title: new ui.H5('Labels:'),
        node: 'section',

        labelsCaption: new ui.P('Pure labels:'),
        label: new ui.Label('Label:'),
        secondary: new ui.Label('Label:'),
        grayscale: new ui.Label('Label:'),

        labelsWithIconsCaption: new ui.P('Labels with Icons:'),
        labelWithIcons: new ui.IconLabel('email'),
        labelWithIcons2: new ui.IconLabel('locked').set({
          css: {
            addClass: 'tertiary'
          },
        })
      },

      buttons: {
        title: new ui.H5('Buttons:'),
        node: 'section',

        sizesCaption: new ui.P('Button sizes:'),
        large: new ui.Button({
          val:'Large',
          on:{
            click(){
              app.set({

              })
            }
          }
        }),
        big: new ui.Button('Big'),
        medium: new ui.Button('Medium'),
        small: new ui.Button('Small'),

        colorCaption: new ui.P('Button colors:'),
        primary: new ui.Button(),
        secondary: new ui.Button('Secondary'),
        tertiary: new ui.Button('Tertiary'),
        grayscale: new ui.Button('Grayscale')
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
          input: new ui.IconLabel('email'),
          button: new ui.Button('Button')
        }
      }
    },

    hr: new ui.Hr(),

    // colors: {
    //   title: new ui.H3('Colors:'),
    //   node: 'section'
    //   // primary: '',
    //   // grayscale: '',
    //   // other: ''
    // },

    // colorsSchemes: {
    //   title: new ui.H3('Color models (schemes):'),
    //   node: 'section'
    //   // primary: '',
    //   // secondary: '',
    //   // tertiary: '',
    //   // grayscale: ''
    // },

    typography: require('./components/typography')
  }
})
