'use strict'

exports.inject = require('vigour-scratch')

/**
 * UIKit default Element object constructor
 */

exports.Element = require('./element')

/**
 * Form Elements
 * @childOf Uikit
 */

// button
exports.Button = require('./form/button')

// input
exports.Input = require('./form/input')

// email
exports.Email = require('./form/input/email')

// password
exports.Password = require('./form/input/password')

// search
exports.Search = require('./form/input/search')

// label
exports.Label = require('./form/label')

// select
exports.Select = require('./form/select')

// group
exports.FormGroup = require('./form/form-group')

// switcher
exports.Switcher = require('./form/switcher')

// textarea
exports.Textarea = require('./form/textarea')

/**
 * Text Elements
 */

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

/**
 * Various Components
 */

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

/**
 * Layout Related Elements
 */

// break
exports.Br = require('./layout/br')
exports.DoubleBr = require('./layout/br/double')
exports.Hr = require('./layout/hr')

// container
exports.Container = require('./layout/container')

// navbar
exports.Navbar = require('./layout/navbar')
