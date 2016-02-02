'use strict'
exports.Text = exports.TextElement = require('./element')

// lets use merge everywhere to much

// header
var heading = require('./heading')
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
// link
exports.A = require('./link')

// // list
exports.List = require('./list')

// // time
exports.Time = require('./time')

// // var
exports.Var = require('./var')

// // quote
exports.Quote = require('./quote')

// // abbr
exports.Abbr = require('./abbr')

// // address
exports.Address = require('./address')

// // mark
exports.Mark = require('./mark')

// // paragraph
exports.P = require('./paragraph')
