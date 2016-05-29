(function () {
  'use strict';
  var app = require('angular').module('hackthedata');

  app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/board/:consumerId/:habitationId?', require('./board'))
      .when('/account/:id', require('./account'));
  }]);
}());
