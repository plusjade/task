define([
  'jquery',
  'underscore',
  'backbone',
  'utils/log',
  'collections/assignments'
], function($, _, Backbone, Log,
  Assignments
  ){
  
  return Backbone.Model.extend({
    // course has many assignments
    assignments : new Assignments,
    
    initialize : function(attrs){
      // if(attrs.assignments){
      //   this.assignments.reset(attrs.assignments);
      //   delete attrs.assignments
      // }
    },
    
    url : function(){
      return '/courses/' + this.id + '.json'
    },
    
    parse : function(response){
      console.log('parse');
      this.assignments.reset(response.assignments);
      delete response.assignments;
      return response
    }
    
  });

});