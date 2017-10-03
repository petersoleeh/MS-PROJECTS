import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitUrl(params) {
      console.log(params);
      var newProject = this.store.createRecord('project', params)
      newProject.save()
      this.transitionTo('index')
      // console.log(params);
    }
  }

});
