import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
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
