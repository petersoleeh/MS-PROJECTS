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
  var st = av.toString()
  console.log(st);
  if (st === 'NaN') {

    return 0
  } else {
    return av.toFixed(1)
  }

}


export default Ember.Helper.helper(ratings);
