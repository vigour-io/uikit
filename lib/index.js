'use strict'

require('vigour-scratch')

/**
 * UIKit default Element object constructor
 */
module.exports.Element = require('./element')

/**
 * Form Elements
 * @childOf Uikit
 */
var form = require('./form')
module.exports.Button = form.Button
module.exports.Input = form.Input
module.exports.Email = form.Email
module.exports.Password = form.Password
module.exports.Search = form.Search
module.exports.Label = form.Label
module.exports.Select = form.Select
module.exports.FormGroup = form.FormGroup
module.exports.Switcher = form.Switcher
module.exports.Textarea = form.Textarea

/**
 * Text Elements
 */
var text = require('./text')
module.exports.TextElement = text.TextElement
module.exports.H1 = text.H1
module.exports.H2 = text.H2
module.exports.H3 = text.H3
module.exports.H4 = text.H4
module.exports.H5 = text.H5
module.exports.H6 = text.H6
module.exports.H7 = text.H7
module.exports.H8 = text.H8
module.exports.H9 = text.H9
module.exports.H10 = text.H10
module.exports.Text = text.Text
module.exports.A = text.A
module.exports.List = text.List
module.exports.Time = text.Time
module.exports.Var = text.Var
module.exports.Quote = text.Quote
module.exports.Abbr = text.Abbr
module.exports.Address = text.Address
module.exports.Mark = text.Mark
module.exports.P = text.P

/**
 * Various Components
 */
var component = require('./component')
module.exports.Icon = component.Icon
module.exports.ToggleIcon = component.ToggleIcon
module.exports.Row = component.Row
module.exports.LabelRow = component.LabelRow
module.exports.SwitcherRow = component.SwitcherRow
module.exports.Modal = component.Modal
module.exports.Topbar = component.Topbar
module.exports.Bottombar = component.Bottombar
module.exports.Fade = component.Fade
module.exports.Notification = component.Notification
module.exports.Success = component.Success
module.exports.Warning = component.Warning
module.exports.Error = component.Error
module.exports.Progressbar = component.Progressbar
module.exports.Loader = component.Loader
module.exports.Img = component.Img
module.exports.Thumb = component.Thumb
module.exports.Switcher = component.Switcher
/**
 * Layout Related Elements
 */
var layout = require('./layout')
module.exports.Br = layout.Br
module.exports.Hr = layout.Hr
module.exports.Container = layout.Container
module.exports.Navbar = layout.Navbar
