(function () {
  'use strict';

  var numId = 0;

  var Chart = require('chart.js/src/chart');

  Ctor.prototype.$inject = ['$timeout'];
  function Ctor ($timeout) {
    this.$timeout = $timeout;
    this._uniqueId = 'comparaisonConso' + ++numId;
  }

  Object.defineProperty(Ctor.prototype, 'uniqueId', {
    enumerable: true,
    get: function () {
      return this._uniqueId;
    },
    set: function (value) {
      this._uniqueId = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'data', {
    enumerable: true,
    get: function () {
      return this._data;
    },
    set: function (value) {
      var that = this;

      this._data = _buildData(value);
      this.$timeout(function () {
        _drawChart.call(that);
      });
    }
  });

  function _buildData (ds) {
    return {
      labels: ds.periode,
      datasets: [{
        type: 'line',
        label: 'Consommation haute',
        data: ds.highConsumption,
        fill: false,
        borderColor: '#ec2f46',
        backgroundColor: '#ec2f46',
        pointBorderColor: '#ec2f46',
        pointBackgroundColor: '#ec2f46',
        pointHoverBackgroundColor: '#ec2f46',
        pointHoverBorderColor: '#ec2f46'
      }, {
        type: 'line',
        label: 'Consommation haute',
        data: ds.currentConsumption,
        fill: false,
        borderColor: '#0f6fd4',
        backgroundColor: '#0f6fd4',
        pointBorderColor: '#0f6fd4',
        pointBackgroundColor: '#0f6fd4',
        pointHoverBackgroundColor: '#0f6fd4',
        pointHoverBorderColor: '#0f6fd4'
      }, {
        type: 'line',
        label: 'Consommation basse',
        data: ds.lowConsumption,
        fill: false,
        borderColor: '#16c627',
        backgroundColor: '#16c627',
        pointBorderColor: '#16c627',
        pointBackgroundColor: '#16c627',
        pointHoverBackgroundColor: '#16c627',
        pointHoverBorderColor: '#16c627'
      }]
    };
  }

  function _drawChart () {
    var ctx;

    ctx = document.getElementById(this._uniqueId);
    this._consoChart = new Chart(ctx, {
      type: 'line',
      data: this._data,
      options: {
        responsive: true,
        tooltips: {mode: 'label'},
        elments: { line: { fil: false } },
        scales: {
          xAxes: [{
            display: true,
            gridLines: { display: false },
            labels: { show: true }
          }],
          yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            gridLines: { display: false },
            labels: { show: true },
            ticks: { beginAtZero: true }
          }]
        }
      }
    });
  }

  module.exports = Ctor;
}());
