import DS from 'ember-data';

export default DS.Model.extend({
  surveyor: DS.belongsTo('surveyor', {async: true}),
  name: DS.attr('string'),
  site: DS.attr('string'),
  created: DS.attr('date'),
  reference: DS.attr('string'),
  rev: DS.attr('string')
});
