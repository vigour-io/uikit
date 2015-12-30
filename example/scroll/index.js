'use strict'

require('vigour-scratch/index.less')
require('./style.less')

var app = require('vigour-element/lib/app')
var Element = require('vigour-element/lib/element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/event/click')
)

var thing = new Element({
  key: 'thing',
  image: {}
})

var holder = new Element({
  key: 'holder',
  scrollTop: {
    val: 0,
    $animation: {
      duration: 36
    }
  }
})

var chooser = new Element({})
var colors = ['yellow', 'orange', 'blue', 'lilac', 'pink', 'red']

for (var i = 0; i < colors.length; i = i + 1) {
  var n = new thing.Constructor()
  var m = new Element({
    define: {
      i: i * 300
    },
    on: {
      click: function (ev, event) {
        app.holder.setKey('scrollTop', this.i)
      }
    }
  })
  holder.setKey(colors[i], n)
  chooser.setKey(colors[i], m)
}

app.set({
  holder: new holder.Constructor(),
  chooser: chooser
})

app.set({
  holder: {
    yellow: {
      topbar: {
        text: 'YELLOW',
        css: {
          val: app.holder.scrollTop,
          $transform: function (val) {
            if (this._input.val < 250) {
              return 'topbar sticky'
            } else if (this._input.val < 300) {
              return 'topbar bottom'
            }
            return 'topbar'
          }
        }
      }
    },
    orange: {
      topbar: {
        text: 'ORANGE',
        css: {
          val: app.holder.scrollTop,
          $transform: function (val) {
            if (this._input.val > 550) {
              return 'topbar bottom'
            }
            if (this._input.val > 300) {
              return 'topbar sticky'
            }
            return 'topbar'
          }
        }
      }
    },
    blue: {
      topbar: {
        text: 'BLUE',
        css: {
          val: app.holder.scrollTop,
          $transform: function (val) {
            if (this._input.val > 850) {
              return 'topbar bottom'
            }
            if (this._input.val > 600) {
              return 'topbar sticky'
            }
            return 'topbar'
          }
        }
      }
    },
    lilac: {
      topbar: {
        text: 'LILAC',
        css: {
          val: app.holder.scrollTop,
          $transform: function (val) {
            if (this._input.val > 1150) {
              return 'topbar bottom'
            }
            if (this._input.val > 900) {
              return 'topbar sticky'
            }
            return 'topbar'
          }
        }
      }
    },
    pink: {
      topbar: {
        text: 'PINK',
        css: {
          val: app.holder.scrollTop,
          $transform: function (val) {
            if (this._input.val > 1450) {
              return 'topbar bottom'
            }
            if (this._input.val > 1200) {
              return 'topbar sticky'
            }
            return 'topbar'
          }
        }
      }
    },
    red: {
      topbar: {
        text: 'RED'
      }
    }
  }
// arrow:{
//   y:{
//     val:app.holder.scrollTop,
//     $$transform:function( val ){
//       var b = document.body
//       return val * b.offsetHeight/b.scrollHeight/2
//     }
//   }
// }
})
