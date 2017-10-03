import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitUrl(params) {
      console.log(params);
    }
  }

});
