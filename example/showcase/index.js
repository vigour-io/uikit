'use strict'
var Element = require('vigour-element')

require('./style.less')

var app = new Element({
  node: document.body
})

var ui = require('~/lib')

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
        large: new ui.Input('large'),
        big: new ui.Input('big'),
        medium: new ui.Input('medium'),
        small: new ui.Input('small'),

        colorCaption: new ui.P('Input colors:'),
        primary: new ui.Input('primary'),
        secondary: new ui.Input('secondary'),
        tertiary: new ui.Input('tertiary'),
        grayscale: new ui.Input('grayscale')
      },

      labels: {
        title: new ui.H5('Labels:'),
        node: 'section',

        primary: new ui.Label('sad'),
      },

      buttons: {
        title: new ui.H5('Buttons:'),
        node: 'section',

        sizesCaption: new ui.P('Button sizes:'),
        large: new ui.Button('large'),
        big: new ui.Button('big'),
        medium: new ui.Button('medium'),
        small: new ui.Button('small'),

        colorCaption: new ui.P('Button colors:'),
        primary: new ui.Button(),
        secondary: new ui.Button('secondary'),
        tertiary: new ui.Button('tertiary'),
        grayscale: new ui.Button('grayscale')
      },

      formGroups: {
        title: new ui.H5('Form Groups:'),
        node: 'section',

        formGroup: {
          css: 'ui-form-group',
          input: new ui.Input('primary'),
          button: new ui.Button('primary')
        }
      }
    },

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