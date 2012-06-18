define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  return Backbone.Router.extend({

    routes: {
      "" : "home",
      "index.html" : "home",
      "*page": "page"
    },

    // Route.navigate() events trigger these route bindings which 
    // set the page id based on the URL.
    // The page change:id event fires, 
    // triggering preview.generate(): see preview model for bindings.
    initialize : function(){
      var that = this;
      
      this.bind("route:home", function(){
        this.preview.page.clear({silent : true})
        this.preview.page.set('path', '_pages/index.md')
      }, this)
      
      this.bind("route:page", function(page){
        this.preview.page.clear({silent : true})
        this.preview.page.set( 'path', (page.split('?path=')[1] || page) );
      }, this)
    },
    
    // Public: Start Router.
    // Returns: Nothing
    start : function(){
      Backbone.history.start({
        pushState: true, 
        root: (this.preview.config.get('basePath') || '/')
      });
    }

  });

});