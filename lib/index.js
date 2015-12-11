'use strict'

exports.inject = require('vigour-scratch/index.less')

// form elements
exports.Button = require('./form/button')
exports.Input = require('./form/input')
exports.Email = require('./form/input/email')
exports.Password = require('./form/input/password')
exports.Label = require('./form/label')
exports.Select = require('./form/select')
exports.FormGroup = require('./form/form-group')
exports.Switcher = require('./form/switcher')
exports.Textarea = require('./form/textarea')

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

// link
exports.A = require('./text/link')

// list
exports.List = require('./text/list')

// paragraph
exports.P = require('./text/paragraph')

// icon
exports.Icon = require('./components/icon')
exports.ToggleIcon = require('./components/icon/toggle')

// row
exports.Row = require('./components/row')
exports.LabelRow = require('./components/row/label-row')
exports.SwitcherRow = require('./components/row/switcher-row')

// modal
exports.Modal = require('./components/modal')
exports.Topbar = require('./components/modal/topbar')
exports.Bottombar = require('./components/modal/bottombar')

// fade
exports.Fade = require('./components/fade')

// norifications
exports.Notification = require('./components/notification')
exports.Success = require('./components/notification/success')
exports.Warning = require('./components/notification/warning')
exports.Error = require('./components/notification/error')

// progressbar
exports.Progressbar = require('./components/progressbar')

// img
exports.Img = require('./components/img')
exports.Thumb = require('./components/img/thumb')

// layouts
exports.Br = require('./layout/break').Br
exports.DoubleBr = require('./layout/break').DoubleBr
exports.Hr = require('./layout/break').Hr
