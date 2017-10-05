import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('new-project');
  this.route('project', {
    path: '/project/:project_id'
  });
  this.route('update', {
    path: '/update/:project_id'
  });
});

export default Router;
