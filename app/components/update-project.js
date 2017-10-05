import Ember from 'ember';

export default Ember.Component.extend({
  updateProject: false,
  actions: {
    updateProject() {
      // this.set('updateProject', true);
    },
    update(project) {
      var params = {
        site: this.get('site'),
        github: this.get('github'),
      };
      this.set('updateProject', false);
      this.sendAction('update', project, params);
    }
  }
});
