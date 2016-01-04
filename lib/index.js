'use strict'

exports.inject = require('vigour-scratch')

exports.Element = require('./element')

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

// Text Element
exports.TextElement = require('./text/element')

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

// simple text
exports.Text = require('./text/element')

// link
exports.A = require('./text/link')

// list
exports.List = require('./text/list')

// time
exports.Time = require('./text/time')

// var
exports.Var = require('./text/var')

// quote
exports.Quote = require('./text/quote')

// abbr
exports.Abbr = require('./text/abbr')

// address
exports.Address = require('./text/address')

// mark
exports.Mark = require('./text/mark')

// paragraph
exports.P = require('./text/paragraph')

// icon
exports.Icon = require('./component/icon')
exports.ToggleIcon = require('./component/icon/toggle')

// row
exports.Row = require('./component/row')
exports.LabelRow = require('./component/row/label')
exports.SwitcherRow = require('./component/row/switcher')

// modal
exports.Modal = require('./component/modal')
exports.Topbar = require('./component/modal/topbar')
exports.Bottombar = require('./component/modal/bottombar')

// fade
exports.Fade = require('./component/fade')

// norifications
exports.Notification = require('./component/notification')
exports.Success = require('./component/notification/success')
exports.Warning = require('./component/notification/warning')
exports.Error = require('./component/notification/error')

// progressbar
exports.Progressbar = require('./component/progressbar')

// loader
exports.Loader = require('./component/loader')

// img
exports.Img = require('./component/img')
exports.Thumb = require('./component/img/thumb')

// layouts
// break
exports.Br = require('./layout/br')
exports.DoubleBr = require('./layout/br/double')
exports.Hr = require('./layout/hr')

// container
exports.Container = require('./layout/container')

// navbar
exports.Navbar = require('./layout/navbar')
