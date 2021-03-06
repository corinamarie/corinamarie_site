console.log("puta de madre");

var corinApp = angular.module('corinApp', ['ngRoute', 'appControllers', 'angularBootstrapUi']);

var appControllers = angular.module('appControllers', []);

corinApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "PrimaryController"
        }).
        when('/about', {
            templateUrl: "assets/views/routes/about.html",
            controller: "PrimaryController"
        }).
        when('/art', {
            templateUrl: "assets/views/routes/art.html",
            controller: "AccordionDemoCtrl"
        }).
        when('/code', {
            templateUrl: "assets/views/routes/code.html",
            controller: "PrimaryController"
        }).
        when('/published', {
            templateUrl: "assets/views/routes/published.html",
            controller: "SecondaryController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);