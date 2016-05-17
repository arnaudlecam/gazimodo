(function () {
  'use strict';

  var app = require('angular').module('todoList');

  app.factory('EnumBuilder', require('./enumBuilder'));
}());
