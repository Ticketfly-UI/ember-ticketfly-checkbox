/* globals alert */

import Controller from 'ember-controller';

export default Controller.extend({
  // BEGIN-SNIPPET alert-hello
  actions: {
    alertHello(checked, value) {
      alert(`Hello, friend! ${value} is ${checked}`);
    }
  }
  // END-SNIPPET
});
