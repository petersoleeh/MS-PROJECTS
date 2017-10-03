import DS from 'ember-data';

export default DS.Model.extend({
  github: DS.attr(),
  contributors: DS.attr(),
  images: DS.attr(),

});
