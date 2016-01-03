'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/event/css/animationEnd')
)

module.exports = new Element({
  node: 'section',
  title: new ui.H5('Notifications:'),

  notification: {
    item0: {
      title: new ui.P('Success:'),
      aside: {
        node: 'aside',
        css: 'ui-background-graylight',

        notif: new ui.Success({
          on: {
            click: {
              bringBack1 () {
                var parent = this.parent
                setTimeout(function () {
                  parent.set({
                    notif: new ui.Success()
                  })
                }, 1000)
              }
            }
          }
        })
      }
    },

    item1: {
      title: new ui.P('Warning:'),
      aside: {
        node: 'aside',
        css: 'ui-background-graylight',

        notif: new ui.Warning({
          on: {
            click: {
              bringBack2 () {
                var parent = this.parent
                setTimeout(function () {
                  parent.set({
                    notif: new ui.Warning()
                  })
                }, 1000)
              }
            }
          }
        })
      }
    },

    item2: {
      title: new ui.P('Error:'),
      aside: {
        node: 'aside',
        css: 'ui-background-graylight',

        notif: new ui.Error({
          on: {
            // override is sitll borken
            click: {
              bringBack3 () {
                var parent = this.parent
                setTimeout(function () {
                  parent.set({
                    notif: new ui.Error()
                  })
                }, 1000)
              }
            }
          }
        })
      }
    }
  }
})
