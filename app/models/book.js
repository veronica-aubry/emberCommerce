import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  price: DS.attr(),
  issues: DS.attr(),
  author: DS.belongsTo('author', { async: true }),
  cover: DS.attr()
});
