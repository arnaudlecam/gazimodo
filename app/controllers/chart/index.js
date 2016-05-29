(function () {
  'use strict';

  var app = require('angular').module('hackthedata');

  app.controller('chart.PieChartController', require('./pieChartController'));
  app.controller('chart.ConsoChartController', require('./consoChartController'));
  app.controller('chart.ComparaisonConsumptionController', require('./comparaisonConsumptionController'));
}());
