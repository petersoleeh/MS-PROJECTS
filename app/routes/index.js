import Ember from 'ember';
var projects = [{
  id: 1,
  github: "https://github.com/DavidNjoroge/Kalisoft",
  site: "https://davidnjoroge.github.io/Kalisoft/",
  contributors: "Njoroge",
  images: "https://screenshotmachine.com/serve.php?img=davidnjoroge-github-io-1024x768desktop-ca16b8.png"
}, {
  id: 2,
  github: "https://github.com/Idaapayo/ECF",
  site: "https://idaapayo.github.io/ECF/",
  contributors: "David",
  images: "https://screenshotmachine.com/serve.php?img=idaapayo-github-io-1024x768desktop-60259d.png"
}, {
  id: 3,
  github: "https://github.com/jonnygovish/Bubble-Blaster-Game",
  site: "https://jonnygovish.github.io/Bubble-Blaster-Game/",
  contributors: "Vinny",
  images: "https://screenshotmachine.com/serve.php?img=jonnygovish-github-io-1024x768desktop-d6420d.png"

}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
});
