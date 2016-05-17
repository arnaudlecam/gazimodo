(function () {
  'use strict';
  var app = require('angular').module('todoList');

  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

  require('./todoList');
}());
