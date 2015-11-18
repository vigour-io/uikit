'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var tempButton = new ui.Button('Register').set({
  css: {
    addClass: 'large iconic'
  },
  text: '',
  facebook: new ui.Icon('close'),
  on: {
    click() {
      this.parent.setKey('css', {
        removeClass: 'fadeInDown',
        addClass: 'animated fadeOut'
      })
    }
  }
}).Constructor

module.exports = new Element({
  0: {
    title: new ui.P('Success:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Notification({
        css: {
          addClass: 'quinary'
        },
        icon: new ui.Icon('correct'),
        caption: {
          title: new ui.H7('Invalid entry, please revise.')
        },
        button: new tempButton(),
        on: {
          click() {
            this.setKey('css', {
              removeClass: 'fadeOut',
              addClass: 'animated fadeInDown'
            })
          }
        }
      })
    }
  },

  1: {
    title: new ui.P('Warning:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Notification({
        css: {
          addClass: 'quaternary'
        },
        icon: new ui.Icon('warning'),
        caption: {
          title: new ui.H6('Please verify your account.'),
          subtitle: new ui.H8({
            text: 'We\'ve sent you an email.',
            css: {
              addClass: 'ui-additional'
            }
          })
        },
        button: new tempButton(),
        on: {
          click() {
            this.setKey('css', {
              removeClass: 'fadeOut',
              addClass: 'animated fadeInDown'
            })
          }
        }
      })
    }
  },

  2: {
    title: new ui.P('Error:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Notification({
        css: {
          addClass: ''
        },
        icon: new ui.Icon('wrong'),
        caption: {
          title: new ui.H7('Invalid entry, please revise.')
        },
        button: new tempButton(),
        on: {
          click() {
            this.setKey('css', {
              removeClass: 'fadeOut',
              addClass: 'animated fadeInDown'
            })
          }
        }
      })
    }
  }
})
