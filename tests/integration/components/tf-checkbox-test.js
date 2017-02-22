import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { initialize, $hook } from 'ember-hook';
import 'ember-css-modules/extensions';

moduleForComponent('tf-checkbox', 'Integration | Component | tf checkbox', {
  beforeEach() {
    initialize();
  },
  integration: true
});

test('renders checkbox inline', function(assert) {
  this.render(hbs`{{tf-checkbox}}`);

  assert.ok($hook('tf-checkbox').length, 'component is rendered');
  assert.ok($hook('tf-checkbox__input-checkbox').length, 'checkbox input rendered');
});

test('receives basic checkbox attributes', function(assert) {
  this.render(hbs`{{tf-checkbox name='color' value='pink' class='awesome-class wow-class'}}`);

  assert.ok($hook('tf-checkbox').hasClass('awesome-class wow-class'), 'classes are passed to the component');
  assert.equal(this.$('input').attr('name'), 'color', 'input name is "color"');
  assert.equal(this.$('input').val(), 'pink', 'input value is "pink"');
});

test('receives disabled attribute', function(assert) {
  this.render(hbs`{{tf-checkbox disabled=disabled}}`);

  assert.ok(!this.$('input').is(':disabled'), 'checkbox is not disabled');
  this.set('disabled', true);
  assert.ok(this.$('input').is(':disabled'), 'checkbox is disabled');
});

test('receives checkboxId', function(assert) {
  this.render(hbs`{{tf-checkbox checkboxId='123'}}`);

  assert.equal(this.$('input').attr('id'), '123', 'id is passed to checkbox');
  assert.equal(this.$('label').attr('for'), '123', 'label "for" matches input "id"');
});

test('checkboxId is not passed in', function(assert) {
  this.render(hbs`{{tf-checkbox}}`);

  const inputId = this.$('input').attr('id');
  const labelFor= this.$('label').attr('for');


  assert.ok(inputId, 'input has generated "id"');
  assert.ok(labelFor, 'label has "for" attribute set');
  assert.equal(inputId, labelFor, 'input "id" matches label "for"');
});

test('renders in block form', function(assert) {
  this.render(hbs`
    {{#tf-checkbox}}
      Check Me!
    {{/tf-checkbox}}
  `);

  assert.ok($hook('tf-checkbox').length, 'component is rendered');
  assert.ok($hook('tf-checkbox__input-checkbox').length, 'checkbox input rendered');
  assert.equal($hook('tf-checkbox__content').text().trim(), "Check Me!", "content is yielded in component");
});

test('receives basic checkbox attributes in block form', function(assert) {
  this.render(hbs`
    {{#tf-checkbox name='pokemon' value='bulbasaur' class='grass-class'}}
      Check Yoself!
    {{/tf-checkbox}}
  `);

  assert.equal($hook('tf-checkbox__input-checkbox').attr('name'), 'pokemon', 'input name is "pokemon"');
  assert.equal($hook('tf-checkbox__input-checkbox').val(), 'bulbasaur', 'input value is "bulbasaur"');
  assert.ok($hook('tf-checkbox').hasClass('grass-class'), 'classes are passed to component');
});

test('sends click action on click', function(assert) {
  assert.expect(1);

  this.on('clicked', function() {
    assert.ok(true, "Click action was sent");
  });

  this.render(hbs`{{tf-checkbox value='strawberry' name='fruit' onClick=(action "clicked")}}`);

  $hook('tf-checkbox__label').click();
});

test('checked property changes on click', function(assert) {
  this.render(hbs`{{tf-checkbox}}`);

  const checkboxInput = $hook('tf-checkbox__input-checkbox');

  assert.ok(!checkboxInput.is(':checked'), "input isn't checked");

  $hook('tf-checkbox__label').click();

  assert.ok(checkboxInput.is(':checked'), "input is checked");
});

test('checkbox receives a shapeStyle', function(assert) {
  this.render(hbs`{{tf-checkbox shapeStyle="round"}}`);

  const classNames = $hook('tf-checkbox__box-shape').attr('class');
  assert.ok(classNames.indexOf('box-shape--round') > -1, 'box shape is round');
});

test('checkbox defaults to square shape', function(assert) {
  this.render(hbs`{{tf-checkbox}}`);

  const classNames = $hook('tf-checkbox__box-shape').attr('class');
  assert.ok(classNames.indexOf('box-shape--square') > -1, 'box shape is square');
});
