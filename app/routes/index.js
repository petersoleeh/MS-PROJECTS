import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      projects: this.store.findAll('project'),
      comments: this.store.findAll('comment')

    })
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params)
      // newComment.save()
      console.log(params);
      this.transitionTo('index')
    }
  }
});
