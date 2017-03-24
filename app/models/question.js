import DS from 'ember-data';

export default DS.Model.extend({
  q: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
});
