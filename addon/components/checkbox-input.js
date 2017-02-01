/**
  @module ember-ticketfly-checkbox
 */
import Ember from 'ember';
import get from 'ember-metal/get';
const { computed } = Ember;

/**
  @public
  @class CheckboxInput
  @extends Ember.Checkbox
 */
export default Ember.Checkbox.extend({
  classNames: ['c-tf-checkbox'],

  classNameBindings: ['shape'],

  shape: computed('shapeStyle', {
    get() {
      const shapeStyle = get(this, 'shapeStyle');
      if (shapeStyle === 'round') {
        return 'c-tf-checkbox--shape-round';
      }
    }
  }),

  attributeBindings: [
    'checked',
    'disabled',
    'name',
    'value'
  ]
});
