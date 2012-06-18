require.config({
  baseUrl : "/assets/require-js/",
  urlArgs: "bust=" + (new Date()).getTime(),
  paths : {
    'jquery' : 'libs/jquery-1.7.1',
    'underscore': 'libs/underscore-1.3.1-amd', // AMD support
    'backbone': 'libs/backbone-0.9.1-amd', // AMD support
    'handlebars' : 'libs/handlebars',
    'mustache' : 'libs/mustache',
  }  
});

require(['app'], function(App){
  App.start();
});