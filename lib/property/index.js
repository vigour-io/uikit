'use strict'

// dependencies
var Property = require('vigour-element/lib/property')
var CSSProperty = require('vigour-element/lib/property/css').properties.css

var SharedProperty = new Property({
  $prepend: 'ui-'
})

var ColorProperty = new Property({
  $prepend: 'ui-color-'
})

var BackgroundProperty = new Property({
  $prepend: 'ui-background-'
})

var SchemeProperty = new Property({
  $prepend: 'ui-scheme-'
})

var PositionProperty = new Property({
  $prepend: 'ui-position-'
})

var ArrangeProperty = new Property({
  $prepend: 'ui-arrange-'
})

var OpacityProperty = new Property({
  $prepend: 'ui-opacity-'
})

var FontProperty = new Property({
  $prepend: 'ui-font-'
})

var InteractiveProperty = new Property({
  $transform (val) {
    return val === true ? 'ui-interactive' : ''
  }
})

var DisableProperty = new Property({
  $transform (val) {
    return val === true ? 'ui-disabled' : ''
  }
})

var ActiveProperty = new Property({
  $transform (val) {
    return val === true ? 'ui-active' : ''
  }
})

var HideProperty = new Property({
  $transform (val) {
    return val === true ? 'ui-none' : ''
  }
})

var HoverProperty = new Property({
  $prepend () {
    var interactive = this.parent.interactive
    if (interactive && interactive.parseValue() === true) {
      return 'ui-hover-'
    }
    return 'ui-interactive ui-hover-'
  }
})

var AnimationProperty = new Property({
  $prepend: 'ui-animate ui-'
})

var InverseProperty = new Property({
  $transform (val) {
    return val === true ? 'ui-inverse' : ''
  }
})

exports.properties = {
  css: new CSSProperty({
    properties: {
      // css add ui-{name}
      name: SharedProperty,
      // css add ui-color-{color}
      color: ColorProperty,
      // css add ui-background-{color}
      background: BackgroundProperty,
      // css add ui-scheme-{background}
      scheme: SchemeProperty,
      // css add ui-{size}
      size: SharedProperty,
      // css add ui-position-{position}
      position: PositionProperty,
      // css add ui-{type}
      type: SharedProperty,
      // css add ui-arrange-{arrange}
      arrange: ArrangeProperty,
      // css add ui-opacity{opacity}
      opacity: OpacityProperty,
      // css add ui-{extra}
      extra: SharedProperty,
      // css add ui-font-{font},
      font: FontProperty,
      // css add ui-{state},
      state: SharedProperty,
      // css add ui-{atomic},
      atomic: SharedProperty,
      // css add ui-{align},
      align: SharedProperty,
      // css add ui-{childOf},
      childOf: SharedProperty,
      // css true ==> ui-interactive
      interactive: InteractiveProperty,
      // css true ==> ui-disabled
      disabled: DisableProperty,
      // css true ==> ui-active
      active: ActiveProperty,
      // css true ==> ui-inverse
      inverse: InverseProperty,
      // css true ==> 'ui-none'
      hide: HideProperty,
      // css 'ui-hover-{hover}
      hover: HoverProperty,
      // css 'ui-animate ui-{animate}'
      animate: AnimationProperty
    }
  })
}
