'use strict'

module.exports.TextElement = require('./element')

// header
var heading = require('./heading')
module.exports.H1 = heading.H1
module.exports.H2 = heading.H2
module.exports.H3 = heading.H3
module.exports.H4 = heading.H4
module.exports.H5 = heading.H5
module.exports.H6 = heading.H6
module.exports.H7 = heading.H7
module.exports.H8 = heading.H8
module.exports.H9 = heading.H9
module.exports.H10 = heading.H10

// simple text
module.exports.Text = require('./element')

// link
module.exports.A = require('./link')

// list
module.exports.List = require('./list')

// time
module.exports.Time = require('./time')

// var
module.exports.Var = require('./var')

// quote
module.exports.Quote = require('./quote')

// abbr
module.exports.Abbr = require('./abbr')

// address
module.exports.Address = require('./address')

// mark
module.exports.Mark = require('./mark')

// paragraph
module.exports.P = require('./paragraph')
