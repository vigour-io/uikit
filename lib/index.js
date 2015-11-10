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
var header = require('./text/header')
exports.H1 = header.H1
exports.H2 = header.H2
exports.H3 = header.H3
exports.H4 = header.H4
exports.H5 = header.H5
exports.H6 = header.H6
exports.H7 = header.H7
exports.H8 = header.H8
exports.H9 = header.H9
exports.H10 = header.H10

// layouts
exports.Br = require('./layout/break').Br
exports.Hr = require('./layout/break').Hr

// link
exports.Link = require('./text/link')

// list
exports.List = require('./text/list')

// paragraph
exports.P = require('./text/paragraph')
