import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('project', params.project_id);
  },
  actions: {
    delete(comment) {
      // alert('imefika')
      // comment.destroyRecord();
      comment.destroyRecord();
      // var comment_deletion = project.get('comment').map(function(comment) {
      //   return comment.destroyRecord();
      // })
      // ember.RSVP.all(comment_deletion).then(function() {
      //   return project.destroyRecord()
      // })
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params)
      var project = params.project
      project.get('comments').addObject(newComment)
      newComment.save().then(function() {
        return project.save()
      })


    },
    saveRating(param) {
      var newRating = this.store.createRecord('rating', param)
      var project = param.project
      project.get('ratings').addObject(newRating)
      newRating.save().then(function() {
        return project.save()
      })

      this.transitionTo('project', project)
    }
  }
});
