'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Headers
 * @memberOf UIKit
 */

// h1
module.exports.H1 = new Element({
  node: 'h1',
  css: 'ui-header ui-h1',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h2
module.exports.H2 = new Element({
  node: 'h2',
  css: 'ui-header ui-h2',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h3
module.exports.H3 = new Element({
  node: 'h3',
  css: 'ui-header ui-h3',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h4
module.exports.H4 = new Element({
  node: 'h4',
  css: 'ui-header ui-h4',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h5
module.exports.H5 = new Element({
  node: 'h5',
  css: 'ui-header ui-h5',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h6
module.exports.H6 = new Element({
  node: 'h6',
  css: 'ui-header ui-h6',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h7
module.exports.H7 = new Element({
  css: 'ui-header ui-h7',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h8
module.exports.H8 = new Element({
  css: 'ui-header ui-h8',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h9
module.exports.H9 = new Element({
  css: 'ui-header ui-h9',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor

// h10
module.exports.H10 = new Element({
  css: 'ui-header ui-h10',
  on: {
    data: function ( event ) {
      this.setKey('text', {
        val: this.val
      })
    }
  }
}).Constructor