'use strict'

require('./style.less')

var Element = require('vigour-element')
var Icon = require('~/lib/icon')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var logo = new Element({
  node: 'a',
  attributes: {
    href: '/example/mtv/'
  },
  icon: new Icon('logo'),
  title: {
    text: 'UIKit',
    node: 'span'
  }
})

module.exports = exports = new Element({
  node: 'header',
  logo: logo,
  menu: new Icon('menu')
})
