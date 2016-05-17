(function () {
  'use strict';

  var app = require('angular').module('todoList');

  app.controller('TodoList.ListController', require('./listController'));
}());
