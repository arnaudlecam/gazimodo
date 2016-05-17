(function () {
  'use strict';

  var app = require('angular').module('todoList');

  app.service('UserService', './userService');
  app.service('AuthService', './authService');
  app.service('TaskService', './taskService');
}());
