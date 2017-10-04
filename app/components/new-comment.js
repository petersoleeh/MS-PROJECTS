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
        content: this.get('content')
      }
      this.set('addNewComment', true)
      this.sendAction('saveComment', params)
    }
  }
});
