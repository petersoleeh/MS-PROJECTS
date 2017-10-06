import Ember from 'ember';

export function ratings(params /*, hash*/ ) {
  // var rati = params[0].get('ratings');

  var ratings = params[0].get('ratings').map(function(rating) {
    return rating.get('rating');
  });
  var total = 0
  for (var i = 0; i < ratings.length; i++) {
    total = ratings[i] + total
  }
  var av = total / ratings.length
  return av.toFixed(1)
  // if (rentalPrice >= 150) {
  //   return '$$$$';
  // } else if (rentalPrice >= 100) {
  //   return '$$$';
  // } else if (rentalPrice >= 50) {
  //   return '$$';
  // } else if (rentalPrice <= 49) {
  //   return '$';
  // }
}


export default Ember.Helper.helper(ratings);
