define([
  'jquery',
  'underscore',
  'backbone',
  'views/assignment_view'
], function($, _, Backbone, AssignmentView){
  
  // A view for the inline tags on a RepoView.
  //
  return Backbone.View.extend({
    el : '#js_assignments_view',
    
    initialize : function(){
      this.collection.bind("reset", this.render, this);
    },
  
    render : function(){
      var cache = [];
      $.each(this.collection.models, function(){
        cache.push(new AssignmentView({model : this}).render());
      })
      $.fn.append.apply($(this.el).empty(), cache);
    }
  
  })

})
  
