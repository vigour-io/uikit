'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var logo = global.logo = new Element({
  node: 'a',
  on: {
    click () {
      global.location.reload()
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
