'use strict'
var Element = require('vigour-element')
var ui = require('~/lib')

require('./less/imports.less')
require('./config.less')
require('./style.less')

var app = new Element({
  node: document.body
})

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

      notifications: require('./components/notification')
    },

    hr: new ui.Hr({
      css: {
        addClass: 'double'
      }
    }),

    forms: {
      title: new ui.H3('Forms:'),
      node: 'section',

      inputs: require('./components/forms/inputs'),

      selects: require('./components/forms/selects'),

      labels: require('./components/forms/labels'),

      buttons: require('./components/forms/buttons'),

      switchers: require('./components/forms/switchers'),

      groups: require('./components/forms/groups')
    },

    hr2: new ui.Hr({
      css: {
        addClass: 'double'
      }
    }),

    typography: require('./components/typography')
  }
})
