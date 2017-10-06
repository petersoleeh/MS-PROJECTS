import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      // alert('inafika')
      if (confirm('are you sure you want to delete the review')) {

        this.sendAction('delete', comment)
      }
    }
  }
});
