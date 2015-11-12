'use strict'

require('vigour-scratch/index.less')

var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/render')
)

// form elements
exports.Button = require('./form/button')
exports.Input = require('./form/input')
exports.Label = require('./form/label').Label
exports.IconLabel = require('./form/label').IconLabel
exports.Select = require('./form/select')
exports.Textarea = require('./form/textarea')

// icon
exports.Icon = require('./icon')

// header
var heading = require('./text/heading')
exports.H1 = heading.H1
exports.H2 = heading.H2
exports.H3 = heading.H3
exports.H4 = heading.H4
exports.H5 = heading.H5
exports.H6 = heading.H6
exports.H7 = heading.H7
exports.H8 = heading.H8
exports.H9 = heading.H9
exports.H10 = heading.H10

// layouts
exports.Br = require('./layout/break').Br
exports.Hr = require('./layout/break').Hr

// link
exports.Link = require('./text/link')

// list
exports.List = require('./text/list')

// paragraph
exports.P = require('./text/paragraph')
