'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var logo = window.logo = new Element({
  node: 'a',
  on: {
    click () {
      window.location.reload()
    }
  },
  icon: new ui.Icon('logo'),
  title: {
    text: 'UIKit',
    node: 'span'
  }
})

module.exports = exports = new Element({
  node: 'header',
  logo: logo,
  menu: new ui.Icon('menu')
})
