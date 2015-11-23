'use strict'
var Element = require('vigour-element')
var ui = require('~/lib')

require('./less/style.less')

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

      progressbars: require('./components/progressbars'),

      modals: require('./components/modal'),

      lists: {
        title: new ui.H5('List items:'),
        node: 'section',

        listsTitle: new ui.P('Aside items:'),
        aside: require('./components/lists').lists,

        formsTitle: new ui.P('Form items:'),
        forms: require('./components/lists').forms
      },

      notifications: require('./components/notification')
    }
  },

  hr: new ui.Hr()
})
