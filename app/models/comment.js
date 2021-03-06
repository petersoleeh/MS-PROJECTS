import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  rating: DS.attr(),
  project: DS.belongsTo('project', {
    async: true
  })

});
