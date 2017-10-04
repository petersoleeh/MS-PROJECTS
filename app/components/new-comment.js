import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentShow() {
      this.set('addNewComment', true)

    },
    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        project: this.get('project')
      }
      this.set('addNewComment', false)
      this.sendAction('saveComment', params)
    }
  }
});
