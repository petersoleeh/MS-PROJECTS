import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('project', params.project_id);
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params)
      var project = params.project
      project.get('comments').addObject(newComment)
      newComment.save().then(function() {
        return project.save()
      })
      // console.log(params);
      this.transitionTo('project', project)
    }
  }
});
