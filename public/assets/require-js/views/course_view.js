define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  
  'views/assignments_view'
], function($, _, Backbone, Mustache,
  AssignmentsView){
  
  return Backbone.View.extend({
    el : '#identification',
    
    initialize : function() {
      this.template = this.$el.clone().html();

      this.model.bind("change", this.render, this);
      
      // course has many assignments
      this.assignmentsView = new AssignmentsView({ collection: this.model.assignments });
    },
    
    render : function(){
      return $(this.el).html(
        Mustache.render(this.template, this.model.attributes)
      )
    },
    
  });

});
  