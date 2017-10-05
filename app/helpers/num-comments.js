import Ember from 'ember';

export function numComments(params /*, hash*/ ) {
  var project = params[0]
  return (project.get('ratings').get('length'));
}

export default Ember.Helper.helper(numComments);
