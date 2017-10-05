import DS from 'ember-data';

export default DS.Model.extend({
  contributors: DS.attr(),
  project: DS.belongsTo('project', {
    async: true
  })

});
