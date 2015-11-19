'use strict'
// require('vigour-scratch/index.less')
require('./style.less')

var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')
var contentdata = new Observable(require('./data.json'))

Element.prototype.inject(require('vigour-element/lib/property/text'))
Observable.prototype.inject(require('vigour-js/lib/operator/subscribe'))

var Title = new ui.H1({
  text: {
    $: 'title'
  }
}).Constructor

var Description = new Element({
  text: {
    $: 'description'
  }
}).Constructor

var TextElement = new Element({
  titlefield: {
    text: {
      $: 'title'
    }
  },
  info: {
    nested: {
      text: {
        $: 'title'
      }
    }
  }
}).Constructor

var Input = new Element({
  node: 'input',
  $: 'title',
  on: {
    data() {
      var node = this.node
      var value = this.val
      if (node.value !== value) {
        node.value = value
      }
    },
    keyup() {
      this.$subscribe.origin.val = this.node.value
    }
  }
}).Constructor

var app = new Element({
  node: document.body,
  val: contentdata,
  topbar: {
    text: 'topbar?!'
  },
  inputlist: {
    ChildConstructor: Input,
    $: 'shows'
  },
  container: {
    ChildConstructor: TextElement,
    $: 'shows'
  }
})
