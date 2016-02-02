'use strict'

var app = require('./app')
var Element = require('vigour-element')
var ui = require('../../lib')

// require('./less/style.less')
app.set({
  components: {
    header: require('./components/header'),
    container: new ui.Container({
      css: {
        add: 'main'
      },
      components: {
        type: 'section',
        title: new ui.H3('Components:'),
        images: {
          title: new ui.H5('Images:'),
          vigourLogo: new ui.Img('assets/img/icon.png')
        },
        progressbars: require('./components/progressbars'),
        // modals: require('./components/modal'),
        // fade: {
        //   type: 'section',
        //   title: new ui.H5('Fade:'),
        //   aside: {
        //     type: 'aside',
        //     css: 'fade ui-background-primary',
        //     fade: new ui.Fade({
        //       css: {
        //         scheme: 'light'
        //       }
        //     }),
        //     fade2: new ui.Fade()
        //   }
        // },
        lists: {
          type: 'section',
          title: new ui.H5('List items:'),
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
  }
})
