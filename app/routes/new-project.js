import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    submitUrl(params) {
      // console.log(params);
      var newProject = this.store.createRecord('project', params)
      newProject.save()
      this.transitionTo('index')

      // var contr = function(name) {
      //   var a = name.split('/')
      //   var b = a.splice(3, 2)
      //   var c = b.join('/')
      //   var array = []
      //   var url = 'https://api.github.com/repos/' + c + '/contributors'
      //   Ember.$.getJSON(url).then(function(response) {
      //     var array = []
      //     for (var i = 0; i < response.length; i++) {
      //       array.push(response[i].login)
      //     }
      //     console.log(array);
      //     var newContributor = this.store.createRecord('contributor', array)
      //     var project = params.project
      //     project.get('contributors').addObject(newContributor)
      //     newContributor.save().then(function() {
      //       return project.save()
      //     })
      //
      //   })
      // }
      //
      // contr(params.github)
    },
    // contributors(array) {
    //   console.log(array);
    //   var newContributors = this.store.createRecord('contributor', array)
    // newContributors.save()
    // },

  }

});
