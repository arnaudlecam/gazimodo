(function () {
  'use strict';

  var app = require('angular').module('solis-sncf');

  app.factory('TaskStateEnum', require('./taskStateEnum'));
}());
