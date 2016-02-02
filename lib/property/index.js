'use strict'

var CSSProperty = require('vigour-element/lib/property/css').properties.css.prototype.Child

var SharedProperty = new CSSProperty({
  $prepend: 'ui-'
})

var ColorProperty = new CSSProperty({
  $prepend: 'ui-color-'
})

var BackgroundProperty = new CSSProperty({
  $prepend: 'ui-background-'
})

var SchemeProperty = new CSSProperty({
  $prepend: 'ui-scheme-'
})

var PositionProperty = new CSSProperty({
  $prepend: 'ui-position-'
})

var ArrangeProperty = new CSSProperty({
  $prepend: 'ui-arrange-'
})

var OpacityProperty = new CSSProperty({
  $prepend: 'ui-opacity-'
})

var FontProperty = new CSSProperty({
  $prepend: 'ui-font-'
})

var InteractiveProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-interactive' : ''
  }
})

var DisableProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-disabled' : ''
  }
})

var ValidProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-valid' : 'ui-invalid'
  }
})

var ActiveProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-active' : ''
  }
})

var HideProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-none' : ''
  }
})

var HoverProperty = new CSSProperty({
  $prepend () {
    var interactive = this.parent.interactive
    if (interactive && interactive.parseValue() === true) {
      return 'ui-hover-'
    }
    return 'ui-interactive ui-hover-'
  }
})

var AnimationProperty = new CSSProperty({
  $prepend: 'ui-animate ui-'
})

var InverseProperty = new CSSProperty({
  $transform (val) {
    return val === true ? 'ui-inverse' : ''
  }
})

exports.css = {
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
    // css add ui-{validation}
    valid: ValidProperty,
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
}
