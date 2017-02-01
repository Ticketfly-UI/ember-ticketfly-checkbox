/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ticketfly-checkbox',

  included: function(app) {

    app.import('app/styles/ember-ticketfly-checkbox.css');

    this._super.included.call(this, app);

  }
};
