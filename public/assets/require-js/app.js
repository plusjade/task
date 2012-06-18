define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'utils/log',
  
  'models/assignment',

  'collections/assignments',

  'views/assignment_view',
  'views/assignments_view',
  
  // jquery plugins
  'jquery-plugins/bootstrap-tab'
], function($, _, Backbone, Router, Log, Assignment, Assignments, AssignmentView, AssignmentsView){

  var App = { 
    
    router : new Router,
    
    // Public: Start the application.
    //
    // Returns: Nothing
    start : function(){
      console.log('app started!');
      this.bind();
      var assignments = new Assignments();
      assignments.fetch();
      
      //var view = new AssignmentsView();
      console.log(assignments);
    },
    
    // bind events to UI elements.
    bind : function(){
      $('#extractor-tabs').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      })
      $('#extractor-tabs').find('a:first').click();
    }
    
  }
  
  return App;
});
