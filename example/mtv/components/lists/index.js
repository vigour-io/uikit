'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports.lists = new Element({
  node: 'aside',
  items: {
    css: 'list',
    node: 'ul',
    0: {
      node: 'li',
      css: 'item',
      horizontal: {
        title: new ui.H5('English')
      }
    },
    1: {
      node: 'li',
      css: 'item with arrow',
      horizontal: {
        title: new ui.H5('Language')
      }
    },
    2: {
      node: 'li',
      css: 'item with arrow',
      horizontal: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            addClass: 'ui-additional'
          }
        })
      }
    },
    3: {
      node: 'li',
      css: 'active item with arrow',
      horizontal: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            addClass: 'ui-additional'
          }
        })
      }
    },
    4: {
      node: 'li',
      css: 'item with arrow',
      icon: new ui.Icon('age'),
      horizontal: {
        title: new ui.H5('Language'),
        subtitle: new ui.H8({
          text: 'Change language.',
          css: {
            addClass: 'ui-additional'
          }
        })
      }
    }
  },
})

module.exports.forms = new Element({
  node: 'aside',
  labels: {
    node: 'ul',
    css: 'list',
    0: {
      node: 'li',
      css: 'item with label',
      label: {
        css: 'ui-label',
        node: 'label',
        caption: new ui.Icon('email'),
        input: new ui.Input({
          attributes: {
            placeholder: 'E-mail',
            type: 'email'
          }
        })
      }
    },
    1: {
      node: 'li',
      css: 'item with label',
      label: {
        css: 'ui-label',
        node: 'label',
        caption: new ui.Icon('locked'),
        input: new ui.Input({
          attributes: {
            placeholder: 'Password',
            type: 'password'
          }
        })
      }
    },
    2: {
      node: 'li',
      css: 'item with label',
      label: {
        css: 'ui-label',
        node: 'label',
        caption: new ui.Icon('gender'),
        select: new ui.Select({
          options: {
            placeholder: {
              node: 'option',
              attributes: {
                disabled: 'disabled',
                selected: 'selected',
              },
              text: 'Gender',
              val: ''
            },
            male: {
              node: 'option',
              text: 'Male'
            },
            female: {
              node: 'option',
              text: 'Female'
            }
          }
        })
      }
    },
    10: new ui.Button({
      css: {
        addClass: 'large tertiary'
      }
    })
  }
})
