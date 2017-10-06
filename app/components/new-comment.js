import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  rate: false,
  actions: {
    commentShow() {
      this.set('addNewComment', true)

    },
    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: parseInt(this.get('rating')),
        project: this.get('project')
      }
      var param = {
        rating: parseInt(this.get('rating')),
        project: this.get('project')
      }
      console.log(param.rating);
      if (param.rating > 10) {
        this.set('rate', true)
      } else {
        this.set('addNewComment', false)
        this.sendAction('saveComment', params)
        this.sendAction('saveRating', param)

      }
    }
  }
});
