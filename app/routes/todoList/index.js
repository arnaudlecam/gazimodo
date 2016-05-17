(function () {
  'use strict';

  var app = require('angular').module('todoList');

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', require('./list'))
      .when('/task/:taskId', require('./task'));
  }]);
}());
