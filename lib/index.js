'use strict'
require('./style.less')
var Element = require('element')
var Observable = require('vjs/lib/observable')

Element.prototype.inject(
  require('element/lib/property/text'),
  require('element/lib/property/transform'),
  require('element/lib/property/css'),
  require('element/lib/property/attributes'),
  require('element/lib/events/render')
)

exports.Header = {}

for (var i = 1; i <= 6; i += 1) {
  exports.Header[i] = new Element({
    node: 'h' + i,
    css: 'ui-header'
  }).Constructor
}

exports.Input = new Element({
  label: { text: {} },
  css: 'ui-input',
  input: {
    node: 'textarea',
    on: {
      keyup: function () {
        this.text.origin.val = this.node.value
      }
    }
  },
  on: {
    parent: {
      label () {
        this.label.text.val = this.key
      }
    }
  }
}).Constructor

exports.Topbar = new Element({
  css: 'topbar'
}).Constructor

exports.Button = new Element({
  css: 'ui-button',
  text: 'this is a button'
}).Constructor

exports.Label = new Element({
  node: 'span',
  css: 'ui-label',
  text: 'this is a label'
}).Constructor

exports.Dl = new Element({
  node: 'dl',
  css: 'ui-dl',
  term: {
    node: 'dt'
  },
  def: {
    node: 'dd',
    text: 'boom!'
  }
}).Constructor

exports.Badge = new Element({
  css: 'ui-badge',
  label: {},
  message: {}
}).Constructor

exports.InputBadge = new Element({
  css: 'ui-badge input',
  label: {},
  message: {
    css: 'message animation',
    node: 'textarea',
    attributes: {
      wrap: 'off'
    },
    text: {
      on: {
        data: {
          resize (data) {
            var node = this.parent.node
            node.style.width = '0px'
            var sw = node.scrollWidth
            node.style.width = (sw) + 'px'
            if (data && sw < 10) {
              setTimeout(() => {
                this._on.data.fn.resize.call(this)
              }, 100)
            }
          }
        }
      }
    },
    on: {
      keyup () {
        this.text.origin.val = this.node.value
      }
    }
  }
}).Constructor

exports.Stat = new Element({
  properties: {
    status: new Observable({
      on: {
        data () {
          this.parent.oval.inner.set({
            css: 'inner ' + this.val
          })
        }
      }
    })
  },
  css: 'ui-stat',
  counter: {},
  title: {
    text: 'Counter'
  },
  oval: {
    inner: {}
  }
}).Constructor

// this.title.text.val = this.key
