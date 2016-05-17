(function () {
  'use strict';

  var app = require('angular').module('todoList');

  app.controller('MainController', require('./indexController'));
}());
