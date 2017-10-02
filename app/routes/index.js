import Ember from 'ember';
var projects = [{
  id: 1,
  github: "https://github.com/DavidNjoroge/Kalisoft",
  contributors: "Njoroge",
  images: ""
}, {
  id: 2,
  github: "https://github.com/Idaapayo/ECF",
  contributors: "David",
  images: ""
}, {
  id: 3,
  github: "https://github.com/jonnygovish/Bubble-Blaster-Game",
  contributors: "Vinny",
  images: ""

}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
});
