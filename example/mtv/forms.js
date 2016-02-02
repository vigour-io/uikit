'use strict'
// require('./less/style.less')

var ui = require('../../lib')

var app = require('vigour-element/lib/app')

app.set({
  forms: {
    type: 'section',
    title: new ui.H3('Forms:'),
    inputs: require('./components/forms/inputs'),
    selects: require('./components/forms/selects'),
    labels: require('./components/forms/labels'),
    buttons: require('./components/forms/buttons'),
    toggles: require('./components/forms/toggles'),
    groups: require('./components/forms/groups')
  },
  hr: new ui.Hr()
})
