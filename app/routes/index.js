import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      projects: this.store.findAll('project'),
      comments: this.store.findAll('comment')

    })
  },
  actions: {
    update(project, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          project.set(key, params[key]);
        }
      });
      project.save();
      this.transitionTo('index');
    }
  }
});
