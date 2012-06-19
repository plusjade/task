define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'handlebars',
  'models/course'
], function($, _, Backbone, Log, Handlebars, Course){
  
  return Backbone.Collection.extend({
    model : Course,
    
    url : function(){
      return '/courses.json'
    }
    
  });

});