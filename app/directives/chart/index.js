(function () {
  'use strict';

  var app = require('angular').module('hackthedata');

  app.directive('pieChart', require('./pieChart'));
  app.directive('consoChart', require('./consoChart'));
  app.directive('comparisonConsumptionChart', require('./comparisonConsumptionChart'));
}());
