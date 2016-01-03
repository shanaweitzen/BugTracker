'use strict';

/**
 * @ngdoc overview
 * @name bugtrackerApp
 * @description
 * # bugtrackerApp
 *
 * Main module of the application.
 */
angular
  .module('bugtrackerApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/bugboard.html',
        controller: 'BugboardCtrl',
        controllerAs: 'bb'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// var app = angular.module('bugboardApp', [ 'ngAnimate','ngResource','ngRoute','ngSanitize','ngTouch','firebase', 'ui.router']);

//   .constant('FirebaseUrl', 'https://acmebugtracker.firebaseio.com/');