'use strict'

require('vigour-scratch')
var Element = require('vigour-element')

// UIKit default Element object constructor
exports.Element = Element
Element.prototype.inject(require('./property'))
// Form Elements
var form = require('./form')
exports.Button = form.Button
exports.BorderedButton = form.BorderedButton
exports.Input = form.Input
exports.Email = form.Email
exports.Password = form.Password
exports.Search = form.Search
exports.Label = form.Label
exports.Select = form.Select
exports.FormGroup = form.FormGroup
exports.Toggle = form.Toggle
exports.Textarea = form.Textarea

// Text Elements
var text = require('./text')
exports.TextElement = text.TextElement
exports.H1 = text.H1
exports.H2 = text.H2
exports.H3 = text.H3
exports.H4 = text.H4
exports.H5 = text.H5
exports.H6 = text.H6
exports.H7 = text.H7
exports.H8 = text.H8
exports.H9 = text.H9
exports.H10 = text.H10
exports.Text = text.Text
exports.A = text.A
exports.List = text.List
exports.Time = text.Time
exports.Var = text.Var
exports.Quote = text.Quote
exports.Abbr = text.Abbr
exports.Address = text.Address
exports.Mark = text.Mark
exports.P = text.P

// Various Components
var component = require('./component')
exports.Icon = component.Icon
exports.ToggleIcon = component.ToggleIcon
exports.Row = component.Row
exports.LabelRow = component.LabelRow
exports.ToggleRow = component.ToggleRow
exports.Modal = component.Modal
exports.Topbar = component.Topbar
exports.Bottombar = component.Bottombar
exports.Fade = component.Fade
exports.Notification = component.Notification
exports.Success = component.Success
exports.Warning = component.Warning
exports.Error = component.Error
exports.Progressbar = component.Progressbar
exports.Loader = component.Loader
exports.Img = component.Img
exports.Thumb = component.Thumb
exports.Switcher = component.Switcher
exports.Carousel = component.Carousel

// Layout Related Elements
var layout = require('./layout')
exports.Br = layout.Br
exports.Hr = layout.Hr
exports.Container = layout.Container
exports.Navbar = layout.Navbar
