/**
 * Textarea element
 * @memberOf UIKit
 */

module.exports = new Element({
  label: { text: {} },
  css: 'ui-input',
  input: {
    node: 'textarea',
    on: {
      keyup () {
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