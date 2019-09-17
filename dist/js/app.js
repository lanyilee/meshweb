
var myApp=angular.module('myapp',['ui.router']);

myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"/index.html"
        })
        .state("index.pages-profile",{
            url:"/pages-profile",
            templateUrl:"/html/pages-profile.html"
        })
})
