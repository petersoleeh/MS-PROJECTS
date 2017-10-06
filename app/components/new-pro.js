import Ember from 'ember';

export default Ember.Component.extend({
  blank: false,
  actions: {
    showPreview() {
      this.set('viewPreview', true);
    },
    submitUrl() {
      var q = {
        deployed: this.get('url'),
        github: this.get('github')
      }
      if (q.deployed === '' || q.github === '') {
        console.log('blank');
        this.set('blank', true)
      } else {
        this.set('blank', false)
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
          var array = []
          for (var i = 0; i < response.length; i++) {
            array.push(response[i].login)
          }
          // console.log(array);

        })

        var params = {
          images: f,
          projectname: e,
          github: this.get('github'),
          contributors: array,
          site: this.get('url')
        }
        this.sendAction('submitUrl', params)
        this.sendAction('contributors', array)
      }
    },
    previewProject() {
      this.set('previewProject', true);
    },
  }
});
