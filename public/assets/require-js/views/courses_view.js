define([
  'jquery',
  'underscore',
  'backbone',
  'mustache'
], function($, _, Backbone, Mustache){
  
  return Backbone.View.extend({
    el : '#js_courses_view',
    
    initialize : function(){
      this.template = this.$el.clone().html();
      this.collection.bind("reset", this.render, this);
    },
  
    render : function(){
      var tmpl = "{{# courses }}" + this.template + "{{/ courses }}";
      return this.$el.html(
        Mustache.render(tmpl, { "courses" : this.collection.toJSON() })
      )
    }
    
  })

})