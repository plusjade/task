define([
  'jquery',
  'underscore',
  'backbone',
  'mustache'
], function($, _, Backbone, Mustache){
  
   return Backbone.View.extend({
    tagName : "tr",
    template : $("#assignment_template").html(),
   
    events : {
      "click a" : "clickTag"
    },
      
    render : function(){
      return $(this.el).html(
        Mustache.render(this.template, this.model.attributes)
      )
    },
  
    clickTag : function(e){
      this.model.collection.owner.trigger("navigate", e.currentTarget.pathname);
      
      e.preventDefault()
      return false;
    }
    
  });

});
  
