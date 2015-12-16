import DS from 'ember-data';

export default DS.Model.extend({
  reference: DS.belongsTo('surveyor', {async: true}),
  name: DS.attr('string'),
  site: DS.attr('string'),
  created: DS.attr('date'),
  rev: DS.attr('string')
});
