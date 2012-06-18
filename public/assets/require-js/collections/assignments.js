define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'handlebars',
  'models/assignment'
], function($, _, Backbone, Log, Handlebars, Assignment){
  
  // Partial Colletion
  return Backbone.Collection.extend({
    model : Assignment,
    
    url : function(){
      return '/courses/1/assignments'
    }
    
  });

});