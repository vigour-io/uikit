'use strict'
require('vigour-scratch/index.less')
require('./style.less')

var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')
var contentdata = new Observable(require('./data.json'))

Element.prototype.inject(require('vigour-element/lib/property/text'))
// Element.prototype.inject(require('vigour-element/lib/events'))
Observable.prototype.inject(require('vigour-js/lib/operator/subscribe'))

var TextItem = new Element({
  titlefield:{
    text:{
      $:'title'
    }
  },
  info:{
    text:{
      $:'description'
    }
  }
}).Constructor

var Input = new Element({
  node: 'input',
  $: 'title',
  on: {
    data () {
      var node = this.node
      var value = this.val
      if (node.value !== value) {
        node.value = value
      }
    },
    keyup () {
      this.$subscribe.origin.val = this.node.value
    }
  }
}).Constructor

var app = new Element({
  val:contentdata,
  node:document.body,
  topbar:{
    text:'TOPBAR!'
  },
  inputlist:{
    ChildConstructor:Input,
    $:'shows'
  },
  container:{
    ChildConstructor:TextItem,
    $:'shows'
  },
})






















// var InputTitle = new Element({
//   node: 'input',
//   $: 'title',
//   on: {
//     data () {
//       var node = this.node
//       var value = this.val
//       if (node.value !== value) {
//         node.value = value
//       }
//     },
//     keyup () {
//       this.$subscribe.origin.val = this.node.value
//     }
//   }
// }).Constructor

// var InputId = new InputTitle({
//   $: 'id'
// }).Constructor

// var app = new Element({
//   val: contentdata,
//   node: document.body,
//   topbar: {
//     node: 'header',
//     text: 'this is a topbar'
//   },
//   container: {
//     ChildConstructor: new Element({
//       titlefield: new InputTitle(),
//       secondTitle: new InputId(),
//       info: {
//         text: {
//           $: 'description'
//         }
//       }
//     }).Constructor,
//     $: 'shows'
//   }
// })
