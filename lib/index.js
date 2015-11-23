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
exports.Email = require('./form/email')
exports.Password = require('./form/password')
exports.Label = require('./form/label')
exports.Select = require('./form/select')
exports.Group = require('./form/group')
exports.Switcher = require('./form/switcher')
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

// row
exports.Row = require('./components/row').Row
exports.LabelRow = require('./components/row').LabelRow
exports.SwitcherRow = require('./components/row').SwitcherRow

// modal
exports.Modal = require('./components/modal')
exports.Topbar = require('./components/modal/topbar').Topbar
exports.Bottombar = require('./components/modal/topbar').Bottombar

// img
exports.Img = require('./img').Img
exports.Thumb = require('./img').Thumb

// norifications
exports.Notification = require('./components/notification').Notification
exports.Success = require('./components/notification').Success
exports.Warning = require('./components/notification').Warning
exports.Error = require('./components/notification').Error

// progressbar
exports.Progressbar = require('./components/progressbar')

// layouts
exports.Br = require('./layout/break').Br
exports.DoubleBr = require('./layout/break').DoubleBr
exports.Hr = require('./layout/break').Hr

// link
exports.Link = require('./text/link')

// list
exports.List = require('./text/list')

// paragraph
exports.P = require('./text/paragraph')
