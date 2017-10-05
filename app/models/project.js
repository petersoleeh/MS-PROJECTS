import DS from 'ember-data';

export default DS.Model.extend({
  github: DS.attr(),
  projectname: DS.attr(),
  site: DS.attr(),
  contributors: DS.attr(),
  images: DS.attr(),
  comments: DS.hasMany('comment', {
    async: true
  }),
  ratings: DS.hasMany('rating', {
    async: true
  })
});
