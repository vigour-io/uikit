'use strict'
var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var Notification = new ui.Row({
  css: 'ui-organism ui-notification ui-form-group ui-animated fadeInDown'
}).Constructor

var NotificationButton = new ui.Button({
  css: {
    addClass: 'large iconic'
  },
  text: '',
  icon: new ui.Icon('close'),
  on: {
    click: {
      close () {
        var parent = this.parent

        parent.setKey('css', {
          removeClass: 'fadeInDown',
          addClass: 'animated fadeOut'
        })

        parent.on('animationEnd', function () {
          this.remove()
        })
      }
    }
  }
}).Constructor

/**
 * Notification
 */
module.exports.Notification = new Notification().Constructor

// success
module.exports.Success = new Notification({
  css: {
    addClass: 'ui-success'
  },
  icon: new ui.Icon('correct'),
  caption: {
    title: new ui.H7('Welcome back!')
  },
  button: new NotificationButton()
}).Constructor

// warning
module.exports.Warning = new Notification({
  css: {
    addClass: 'ui-warning'
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
  button: new NotificationButton()
}).Constructor

// error
module.exports.Error = new Notification({
  css: {
    addClass: 'ui-error'
  },
  icon: new ui.Icon('wrong'),
  caption: {
    title: new ui.H7('Invalid entry, please revise.')
  },
  button: new NotificationButton()
}).Constructor
