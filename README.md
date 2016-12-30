# Ember Ticketfly Checkbox

This Ember addon provides the checkbox components of the Ticketfly UI library.

## Usage

`tf-checkbox` component:
* Use inline for just the checkbox input. Use in block form for a label with the input.
* Pass `disabled` property to alter the checkbox state.
* Additional attributes you may pass in to the input: `name`, `id`, `class`, `disabled`, `checked`

**shapeStyle**
* Pass `shapeStyle` property to modify the shape class of the input. Options are: square and round. The checkbox is square by default.

Template:
```hbs
{{ember-ticketfly-checkbox}}
{{ember-ticketfly-checkbox shapeStyle="round"}}

{{#ember-ticketfly-checkbox shapeStyle="round"}}
  Check yo self
{{/ember-ticketfly-checkbox}}
```

Resulting HTML:
```html
<input type="checkbox" class="tf-checkbox">
<input type="checkbox" class="tf-checkbox tf-checkbox--shape-round">

<label for="some-id" class="tf-checkbox__label">
  <input type="checkbox" class="tf-checkbox tf-checkbox--shape-round" id="some-id">
  Check yo self
</label>
```

**labelClass**
* Pass `labelClass` to the block form to add a class to your label

Template:
```hbs

{{#ember-ticketfly-checkbox labelClass="some-class another-class"}}
  Check please
{{/ember-ticketfly-checkbox}}
```

Resulting HTML:
```html
<label for="some-id" class="tf-checkbox__label some-class another-class">
  <input type="checkbox" class="tf-checkbox" id="some-id">
  Check yo self
</label>
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-ticketfly-checkbox`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
