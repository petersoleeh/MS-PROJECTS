import Ember from 'ember';

export function projectRating(params /*, hash*/ ) {
  var project = params[0]
  var array = project.get('ratings')
  console.log(array);

  var total = 0
  if (project.get('ratings').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
  // for (var i = 0; i < project.get('ratings').get('length'); i++) {
  //   total = array[i] + total
  // }
  // return total


}

export default Ember.Helper.helper(projectRating);
