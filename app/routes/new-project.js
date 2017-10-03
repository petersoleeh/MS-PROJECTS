import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    submitGithub(params){
      console.log(params.userLink);
    }
  }

});
