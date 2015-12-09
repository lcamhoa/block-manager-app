import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('surveyor-index-table-row', 'Integration | Component | surveyor index table row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{surveyor-index-table-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#surveyor-index-table-row}}
      template block text
    {{/surveyor-index-table-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
