define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'utils/log',
  
  'models/course',
  'models/assignment',

  'collections/courses',
  'collections/assignments',

  'views/course_view',
  'views/courses_view',
  'views/assignment_view',
  'views/assignments_view',
  
  // jquery plugins
  'jquery-plugins/bootstrap-tab'
], function($, _, Backbone, Router, Log, 
  Course, Assignment, Courses, Assignments, 
  CourseView, CoursesView, AssignmentView, AssignmentsView){

  return { 
    
    router : new Router,
    
    // Public: Start the application.
    //
    // Returns: Nothing
    start : function(){
      console.log('app started!');
      this.bind();
      this.router.start();
    },
    
    // bind events to UI elements.
    bind : function(){
      
      $('#extractor-tabs').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      })
      $('#course_extra').find('a').live('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
      })
      
      $('#extractor-tabs').find('a:first').click();
      $('#course_extra').find('a:first').click();
    }
    
  }
  
});
