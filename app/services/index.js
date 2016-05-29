(function () {
  'use strict';

  var app = require('angular').module('hackthedata');

  app.service('UserService', require('./userService'));
  app.service('DashboardService', require('./dashboardService'));
}());
