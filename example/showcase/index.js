'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Observable.prototype.inject(require('vigour-js/lib/operator/add'))
Observable.prototype.inject(require('vigour-js/lib/operator/subscribe'))
Observable.prototype.inject(require('vigour-js/lib/operator/transform'))

Element.prototype.inject(require('vigour-element/lib/property/style'))

require('./style.less')

var data = new Observable({
  key:'data',
  list: [{
    title: 'one thing',
    subtitle: 'subsubsubsubs11'
  }, {
    title: 'two thing',
    subtitle: 'subsubsubsubs22'
  }, {
    title: 'three thing',
    subtitle: 'subsubsubsubs33'
  }, {
    title: 'four thing',
    subtitle: 'subsubsubsubs44'
  }, {
    title: 'five thing',
    subtitle: 'subsubsubsubs55'
  }]
})


var videoData = new Observable({
  key:'video',
  list: [{
    title: 'video 1',
    subtitle: 'subsubsubsubs11'
  }, {
    title: 'video 2',
    subtitle: 'subsubsubsubs22'
  }, {
    title: 'video 3',
    subtitle: 'subsubsubsubs33'
  }, {
    title: 'video 4',
    subtitle: 'subsubsubsubs44'
  }, {
    title: 'video 5',
    subtitle: 'subsubsubsubs55'
  }]
})

window.data = data

var app = new Element({
  key:'app',
  node: document.body
})

// setInterval(function () {
//   data.list.each(function(prop){
//     prop.remove()
//     return true
//   })
//   data.list2.set({
//     [Math.random()]: Math.random()
//   })
// }, 2000)

var Input = require('~/lib').Input
console.clear()
console.log('----adding title sub')
var Block = new Element({
  key:'smileyblock',
  titlefield: new Input({
    key:'iiiii',
    $: 'title'
  }),
  // subtitlefield: new Input({
  //   $: 'subtitle'
  // })
}).Constructor

var List = new Element({
  ChildConstructor: Block,
  $: 'list'
}).Constructor

console.clear()
console.log('--------- add video')

app.set({
  // val: data,
  // header: require('./components/header'),
  onething: new List(),
  things: new List(),
  specialVideoSection: new List({
    val:videoData,
    style:{
      border:'10px solid blue'
    }
  })
})

// console.log('--------- add data')

app.set(data)


// window.app = app

// console.log('=====>', app.container._cache[0])
// data.list[1].title.val = 'smurk'

// app.container._cache[0].set({
//   $subscribe:data.list[0].title
//   })
