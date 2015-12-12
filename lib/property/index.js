'use strict'

// dependencies
var Property = require('vigour-element/lib/property')

// shared
var SharedProperty = new Property({
  on: {
    new () {
      this.set({
        old: this.val
      })
    },
    data (data, event) {
      if (!this.parent) return

      var element = this.parent.parent

      var val = this.val
      var oldVal = this.old.val

      element.set({
        css: {
          removeClass: `ui-${oldVal}`,
          addClass: `ui-${val}`
        }
      })

      oldVal = val
    }
  }
}).Constructor

exports.properties = {
  /**
   * Use specific properties for UI classes.
   * Please use it without 'ui-' prefix.
   */
  ui: new Property({
    properties: {
      /**
       * Name of component
       * @example
       * ui: {
       *   name: 'select'
       * }
       */
      name: SharedProperty,

      /**
       * Color specific classes
       * @example
       * ui: {
       *   color: 'primary'
       * }
       */
      color: SharedProperty,

      /**
       * Size specific classes
       * @example
       * ui: {
       *   size: 'large'
       * }
       */
      size: SharedProperty,

      /**
       * Specific type
       * @example
       * ui: {
       *   type: 'iconic'
       * }
       */
      type: SharedProperty,

      /**
       * State specific classes
       * @example
       * ui: {
       *   state: 'dirty'
       * }
       */
      state: SharedProperty,

      /**
       * State specific classes
       * @example
       * ui: {
       *   atomic: 'molecule'
       * }
       */
      atomic: SharedProperty,

      /**
       * Text alignment
       * @example
       * ui: {
       *   atomic: 'molecule'
       * }
       */
      align: SharedProperty,

      /**
       * Set if it belongs to specific group of components
       * @example
       * ui: {
       *   childOf: 'form-element'
       * }
       */
      childOf: SharedProperty,

      /**
       * Set hover and focus effects by adding interactivity
       * @example
       * ui: {
       *   interactive: true
       * }
       */
      interactive: new Property({
        on: {
          data () {
            var element = this.parent.parent
            var val = this.val

            if (val) {
              element.set({
                css: {
                  addClass: 'ui-interactive'
                }
              })
            } else {
              element.set({
                css: {
                  removeClass: 'ui-interactive'
                }
              })
            }
          }
        }
      })
    }
  })
}
