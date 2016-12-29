/**
  @module ember-ticketfly-checkbox
 */
import Ember from 'ember';
import layout from '../templates/components/tf-checkbox';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
const { guidFor } = Ember;

/**
  @public
  @class TfCheckbox
  @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,

  tagName: '',

  didReceiveAttrs() {
    this._super(...arguments);

    // if no id is supplied, generate one so that the label and checkbox can have one to share
    // for accessibility by default
    if (!get(this, 'id')) { 
      set(this, 'id', `id-${guidFor(this)}`); 
    }
  },

  actions: {
    onClick(e) {
      const eTarget = e.target;
      this.sendAction('onClick', eTarget.value, eTarget.name, eTarget.id);
    }
  }
});
