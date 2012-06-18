define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'handlebars'
], function($, _, Backbone, Log, Handlebars){
  
  // Assignment Model
  return Backbone.Model.extend({

    generate : function(){
      return this.fetch({dataType : "html", cache : false });
    },
    
    url : function(){
      return '/assignments/1'
    }
    
  });

});