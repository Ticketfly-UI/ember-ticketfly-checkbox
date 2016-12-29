import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-checkbox', 'Integration | Component | tf checkbox', {
  integration: true
});

test('renders basic attributes inline', function(assert) {
  this.render(hbs`{{tf-checkbox name='color' value='pink' class='awesome-class wow-class' disabled=disabled id='123'}}`);

  assert.ok(this.$('input[type="checkbox"]').hasClass('tf-checkbox'), 'input checkbox rendered');
  assert.equal(this.$('input').attr('name'), 'color', 'input name is "color"');
  assert.equal(this.$('input').val(), 'pink', 'input value is "pink"');
  assert.ok(this.$('input').hasClass('awesome-class wow-class'), 'classes are passed to checkbox');
  assert.equal(this.$('input').attr('id'), '123', 'id is passed to checkbox');
  assert.ok(!this.$('input').is(':disabled'), 'checkbox is not disabled');

  this.set('disabled', true);
  assert.ok(this.$('input').is(':disabled'), 'checkbox is disabled');
});

test('renders basic attributes in block form', function(assert) {
  this.render(hbs`
    {{#tf-checkbox name='pokemon' value='bulbasaur' class='johto-class kanto-class' disabled=disabled id='234' labelClass='lorelei-class agatha-class'}}
      Check Me!
    {{/tf-checkbox}}
  `);

  assert.ok(this.$('input[type="checkbox"]').hasClass('tf-checkbox'), 'input checkbox rendered');
  assert.equal(this.$('input').attr('name'), 'pokemon', 'input name is "pokemon"');
  assert.equal(this.$('input').val(), 'bulbasaur', 'input value is "bulbasaur"');
  assert.ok(this.$('input').hasClass('johto-class kanto-class'), 'classes are passed to checkbox');
  assert.equal(this.$('input').attr('id'), '234', 'id is passed to checkbox');
  assert.ok(!this.$('input').is(':disabled'), 'checkbox is not disabled');

  this.set('disabled', true);
  assert.ok(this.$('input').is(':disabled'), 'checkbox is disabled');

  assert.ok(this.$('label').hasClass('tf-checkbox__label'), 'label is rendered');
  assert.equal(this.$('label').attr('for'), '234', 'label "for" matches input "id"');
  assert.ok(this.$('label').hasClass('lorelei-class agatha-class'), 'label classes are passed to checkbox');

  assert.equal(this.$().text().trim(), "Check Me!", "block is yielded");
});

test('block form accessibility by default', function(assert) {
  this.render(hbs`
    {{#tf-checkbox id=id}}
      Check You!
    {{/tf-checkbox}}
  `);

  assert.equal(this.$('input').attr('id'), this.$('label').attr('for'), 'label "for" matches input "id" even if no id is passed in');
});

test('sends onClick action on checkbox click', function(assert) {
  assert.expect(1);

  this.on('onClick', function() {
    const args = Array.prototype.slice.call(arguments);
    assert.deepEqual(args, ['strawberry', 'fruit', '345'], 'onClick action is called with value, name, and id');
  });

  this.render(hbs`{{tf-checkbox value='strawberry' name='fruit' id='345' onClick=(action "onClick")}}`);

  this.$('input').click();
});

test('binds shapeStyle attribute to input shape', function(assert) {
  this.render(hbs`{{tf-checkbox id="square-checkbox"}}`);

  assert.ok(!this.$('#square-checkbox').hasClass('tf-checkbox--shape-round'), "checkbox has no shape style (square by default)");

  this.render(hbs`
    {{#tf-checkbox id="round-checkbox" shapeStyle="round"}}
      Checkerz
    {{/tf-checkbox}}
  `);

  assert.ok(this.$('#round-checkbox').hasClass('tf-checkbox--shape-round'), "checkbox has round shape style");
});

test('binds checked attribute to input and label', function(assert) {
  this.render(hbs`
    {{#tf-checkbox checked=checked}}
      Checkmate
    {{/tf-checkbox}}
  `);

  assert.ok(!this.$('input').is(':checked'), 'input is not checked');
  assert.ok(!this.$('label').hasClass('tf-checkbox__label--checked'), 'label does not have checked class');

  this.set('checked', true);
  assert.ok(this.$('input').is(':checked'), 'input is checked');
  assert.ok(this.$('label').hasClass('tf-checkbox__label--checked'), 'label has checked class');
});
