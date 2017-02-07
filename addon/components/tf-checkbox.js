/**
  @module ember-ticketfly-checkbox
 */
import layout from '../templates/components/tf-checkbox';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import Component from 'ember-component';
import computed from 'ember-computed';
import { guidFor } from 'ember-metal/utils';

const DEFAULT_BOX_SHAPE = 'square';
/**
  @public
  @class TfCheckbox
  @extends Ember.Component
 */
export default Component.extend({
  layout,

  didReceiveAttrs() {
    this._super(...arguments);

    // if no checkboxId is supplied, generate one so that the label and checkbox can have one to share
    // for accessibility by default
    if (!get(this, 'checkboxId')) { 
      set(this, 'checkboxId', `id-${guidFor(this)}`); 
    }
  },

  classNames: ['c-tf-checkbox'],

  shouldShowCheck: computed.or('checked','disabled'),

  boxShape: computed('shapeStyle', {
    get() {
      const shapeStyle = get(this, 'shapeStyle') || DEFAULT_BOX_SHAPE;
      return `c-tf-checkbox__box-shape--${shapeStyle}`;
    }
  }),

  hook: 'tf-checkbox',

  onClick() { return this; }, //noop

  actions: {
    clickedCheckbox(value, name, id) {
      if (get(this, 'disabled')) { return; }
      const checked = this.toggleProperty('checked');
      get(this, 'onClick')(checked, value, name, id);
    }
  }
});
