import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('surveyor-edit-form', 'Integration | Component | surveyor edit form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{surveyor-edit-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#surveyor-edit-form}}
      template block text
    {{/surveyor-edit-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
