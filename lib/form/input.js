/**
 * Input element
 * @memberOf UIKit.form
 */

exports.Input = new Element({
  label: { text: {} },
  css: 'ui-input',
  input: {
    node: 'textarea',
    on: {
      keyup: function () {
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
}