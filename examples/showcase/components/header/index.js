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

var logo = new Icon('vigour')
logo.set({
  node: 'a',
  attributes: {
    href: ''
  },
  title: {
    text: 'UIKit',
    node: 'span'
  }
})

module.exports = exports = new Element({
  node: 'header',
  logo: logo,
  hamburger: new Element({
    node: 'i'
  })
})