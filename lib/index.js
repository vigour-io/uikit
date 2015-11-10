'use strict'

require('vigour-scratch/index.less')

var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/render')
)

// form elements
module.exports.Button = require('./form/button')
module.exports.Input = require('./form/input')
module.exports.Label = require('./form/label').Label
module.exports.IconLabel = require('./form/label').IconLabel
module.exports.Select = require('./form/select')
module.exports.Textarea = require('./form/textarea')

// icon
module.exports.Icon = require('./icon')

// header
var header = require('./text/header')
module.exports.H1 = header.H1
module.exports.H2 = header.H2
module.exports.H3 = header.H3
module.exports.H4 = header.H4
module.exports.H5 = header.H5
module.exports.H6 = header.H6
module.exports.H7 = header.H7
module.exports.H8 = header.H8
module.exports.H9 = header.H9
module.exports.H10 = header.H10

// layouts
module.exports.Br = require('./layout/break').Br
module.exports.Hr = require('./layout/break').Hr

// link
module.exports.Link = require('./text/link')

// list
module.exports.List = require('./text/list')

// paragraph
module.exports.P = require('./text/paragraph')
