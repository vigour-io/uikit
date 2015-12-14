'use strict'
var Element = require('vigour-element')
var ui = require('uikit/lib')

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
  container: new ui.Container({
    css: {
      addClass: 'main'
    },

    components: {
      title: new ui.H3('Components:'),
      node: 'section',

      images: {
        title: new ui.H5('Images:'),
        vigourLogo: new ui.Img('assets/img/icon.png')
      },

      progressbars: require('./components/progressbars'),

      modals: require('./components/modal'),

      fade: {
        title: new ui.H5('Fade:'),
        node: 'section',

        aside: {
          node: 'aside',
          css: 'fade ui-background-primary',

          fade: new ui.Fade({
            ui: {
              scheme: 'fade-light'
            }
          }),

          fade2: new ui.Fade()
        }
      },

      lists: {
        title: new ui.H5('List items:'),
        node: 'section',

        aside: {
          listsTitle: new ui.P('Aside items:'),
          aside: require('./components/lists').lists
        },

        asideForms: {
          title: new ui.P('Form items:'),
          aside: require('./components/lists').forms
        }
      },

      notifications: require('./components/notification')
    }
  }),

  hr: new ui.Hr()
})
