import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    firstName: DS.attr('string'),
    surname: DS.attr('string'),
    company: DS.attr('string'),
    telephone: DS.attr('string'),
    mobile: DS.attr('string'),
    fax: DS.attr('string'),
    email: DS.attr('string'),
    house: DS.attr('string'),
    street: DS.attr('string'),
    locality: DS.attr('string'),
    town: DS.attr('string'),
    county: DS.attr('string'),
    postcode: DS.attr('string'),
    rev: DS.attr('string')
});
