'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')
var Icon = require('~/lib/icon')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = exports = new Element({
  node: 'aside',
  list: {
    node: 'ul',
    0: {
      node: 'li',
      title: new ui.H5('Language'),
      subtitle: new ui.H8({
        text: 'Change language.',
        css: {
          addClass: 'ui-additional'
        }
      })
    }
  }
})