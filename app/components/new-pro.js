import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitUrl() {

      var q = {
        github: this.get('github')
      }
      var a = q.github.split('/')
      var aa = q.github.split('/')
      var b = a.splice(3, 2)
      var c = b.join('/')
      console.log(aa);
      var d = aa.splice(-2)
      var e = d.join()

      var array = []
      var url = 'https://api.github.com/repos/' + c + '/contributors'
      Ember.$.getJSON(url).then(function(response) {
        for (var i = 0; i < response.length; i++) {
          array.push(response[i].login)
        }
        // console.log(array);
        // return array
      })
      var params = {
        name: e,
        github: this.get('github'),
        contributors: array,
        url: this.get('url')
      }
      this.sendAction('submitUrl', params)
    }
  }
});
