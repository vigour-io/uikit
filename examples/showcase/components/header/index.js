'use strict'

require('./style.less')

var Element = require('element')
var Icon = require('~/lib/icon')

Element.prototype.inject(
  require('element/lib/property/text'),
  require('element/lib/property/transform'),
  require('element/lib/property/css'),
  require('element/lib/property/attributes')
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
  logo: logo
})