import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('surveyor-create-form', 'Integration | Component | surveyor create form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{surveyor-create-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#surveyor-create-form}}
      template block text
    {{/surveyor-create-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
