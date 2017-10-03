import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitGithub() {
      var q = {
        github: this.get('github')
      }
      var a = q.github.split('/')
      var b = a.splice(3, 2)
      var c = b.join('/')
      // console.log(c);

      var params = {
        github: this.get('github'),
        userLink: c,
        url: this.get('url')
      }

      // console.log(q.github);
      this.sendAction('submitGithub', params)
    }
  }
});
