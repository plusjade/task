define([
  'jquery',
  'underscore',
  'backbone',
  
  'models/course',
  'models/assignment',

  'collections/courses',
  'collections/assignments',

  'views/course_view',
  'views/courses_view',
  'views/assignment_view',
  'views/assignments_view',

], function($, _, Backbone,
  Course, Assignment, Courses, Assignments, 
  CourseView, CoursesView, AssignmentView, AssignmentsView){

  return Backbone.Router.extend({

    routes: {
      "" : "home",
      "courses/:id": "course",
      "courses" : "courses",
    },

    // Route.navigate() events trigger these route bindings which 
    // set the page id based on the URL.
    // The page change:id event fires, 
    // triggering preview.generate(): see preview model for bindings.
    initialize : function(){
      var that = this;
      
      this.bind("route:home", function(){
        console.log("home page")
      }, this)
      
      this.bind("route:courses", function(){
        console.log('courses page');
        var courses = new Courses();
        var courses_view = new CoursesView({ collection: courses });
        courses.fetch()
      }, this)

      // All courses must have an existing guid since they reference
      // uploaded syllabus documents.
      // In other words there is no /courses/new.
      this.bind("route:course", function(id){
        console.log('course page:' + id);
        var course = new Course({id : id});
        course.fetch();
        var course_view = new CourseView({ model: course })
      }, this)
    },
    
    // Public: Start Router.
    // Returns: Nothing
    start : function(){
      Backbone.history.start({
        pushState: true,
      });
    }

  });

});