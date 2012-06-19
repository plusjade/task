define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'handlebars'
], function($, _, Backbone, Log, Handlebars){
  
  return Backbone.Model.extend({

    url : function(){
      return '/assignments/' + this.id + '.json'
    }
    
  });

});