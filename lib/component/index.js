'use strict'

// icon
exports.Icon = require('./icon')
exports.ToggleIcon = require('./icon/toggle')

// row
var Row = require('./row')
exports.Row = Row
exports.LabelRow = Row.Label
exports.ToggleRow = Row.Toggle
exports.RowList = Row.List

// modal
exports.Modal = require('./modal')
exports.Topbar = require('./modal/topbar')
exports.Bottombar = require('./modal/bottombar')

// fade
exports.Fade = require('./fade')

// norifications
exports.Notification = require('./notification')
exports.Success = require('./notification/success')
exports.Warning = require('./notification/warning')
exports.Error = require('./notification/error')

// progressbar
exports.Progressbar = require('./progressbar')

// loader
exports.Loader = require('./loader')

// img
exports.Img = require('./img')
exports.Thumb = require('./img/thumb')

// switcher
exports.Switcher = require('./switcher')

// carousel
exports.Carousel = require('./carousel')
