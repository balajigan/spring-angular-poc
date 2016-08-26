angular.module('CLEApp', ['AngularChart']).config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/trends', {
          templateUrl: '../views/trends.html',
          controller: 'TrendsCtrl'
        })
        .when('/search', {
          templateUrl: '../views/search.html',
          controller: 'SearchCtrl'
        })
        .otherwise({
          redirectTo: '/search'
        });
    }
  ]);
