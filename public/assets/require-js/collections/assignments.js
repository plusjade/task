define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'handlebars',
  'models/assignment'
], function($, _, Backbone, Log, Handlebars, Assignment){
  
  return Backbone.Collection.extend({
    model : Assignment
  });

});