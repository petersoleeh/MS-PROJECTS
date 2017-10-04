import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(project, params) {
      this.sendAction('update', project, params);
    }
  }
});
