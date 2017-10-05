import Ember from 'ember';

export default Ember.Component.extend({
  viewPreview: false,
  actions: {
    showPreview() {
      this.set('viewPreview', true);
    },
    submitUrl() {
      console.log('am here');
      var q = {
        deployed: this.get('url'),
        github: this.get('github')
      }
      var a = q.github.split('/')
      var aa = q.github.split('/')
      var b = a.splice(3, 2)
      var c = b.join('/')
      var d = aa.splice(-1)
      var e = d.join()
      var f = 'http://api.screenshotmachine.com/?key=4055d6&dimension=1024x768&hash=94f0097b94d2f2486db52aab7cf268ad&url=' + q.deployed
      // console.log(f);
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
        images: f,
        projectname: e,
        github: this.get('github'),
        contributors: array,
        site: this.get('url')
      }
      this.sendAction('submitUrl', params)
    }
  }
});
