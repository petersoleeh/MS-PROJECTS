import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  project: DS.belongsTo('project', {
    async: true
  })


});
