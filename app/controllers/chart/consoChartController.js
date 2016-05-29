(function () {
  'use strict';

  var numId = 0;

  var Chart = require('chart.js/src/chart');

  Ctor.prototype.$inject = ['$timeout'];
  function Ctor ($timeout) {
    this.$timeout = $timeout;
    this._uniqueId = 'consoChart' + ++numId;
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
      this._data;
    },
    set: function (value) {
      var that = this;

      this._data = _buildData.call(this, value);
      this.$timeout(function () {
        _drawChart.call(that);
      });
    }
  });

  Object.defineProperty(Ctor.prototype, 'typeAxis', {
    enumerable: true,
    get: function () {
      return this._typeAxis;
    },
    set: function (value) {
      this._typeAxis = value;
    }
  });

  function _buildData (ds) {
    return {
      labels: ds.periode,
      datasets: [{
        type: 'line',
        label: 'Emission CO2',
        data: ds.emissionsCO2,
        fill: false,
        borderColor: '#0f6fd4',
        backgroundColor: '#0f6fd4',
        pointBorderColor: '#0f6fd4',
        pointBackgroundColor: '#0f6fd4',
        pointHoverBackgroundColor: '#0f6fd4',
        pointHoverBorderColor: '#0f6fd4',
        yAxisID: 'y-axis-2'
      }, {
        type: 'line',
        label: 'Température',
        data: ds.temperatures,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-3'
      }, {
        type: 'bar',
        label: 'Consommation' + this.typeAxis === 0 ? ' en €' : ' en KWh',
        data: this.typeAxis === 0 ? ds.consommationsEuro : ds.consommationsKwh,
        fill: false,
        backgroundColor: '#16c627',
        borderColor: '#16c627',
        hoverBackgroundColor: '#16c627',
        hoverBorderColor: '#16c627',
        yAxisID: 'y-axis-1'
      }]
    };
  }

  function _drawChart () {
    var ctx;

    ctx = document.getElementById(this._uniqueId);
    this._consoChart = new Chart(ctx, {
      type: 'bar',
      data: this._data,
      options: {
        responsive: true,
        tooltips: { mode: 'label' },
        elements: {
          line: { fill: false }
        },
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
            id: 'y-axis-1',
            gridLines: { display: false },
            labels: { show: true },
            ticks: { beginAtZero: true }
          }, {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: { display: false },
            labels: { show: true },
            ticks: { beginAtZero: true }
          }, {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-3',
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
