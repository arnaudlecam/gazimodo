(function () {
  'use strict';

  var numId = 0;

  var Chart = require('chart.js/src/chart');

  Ctor.prototype.$inject = ['$timeout'];
  function Ctor ($timeout) {
    this._uniqueId = 'piechart' + ++numId;
    this.$timeout = $timeout;
  }

  Object.defineProperty(Ctor.prototype, 'uniqueId', {
    enumerable: true,
    get: function () {
      return this._uniqueId;
    }
  });

  Object.defineProperty(Ctor.prototype, 'data', {
    enumerable: true,
    get: function () {
      return this._data;
    },
    set: function (value) {
      var that = this;

      this._data = value;
      this.$timeout(function () {
        _drawChart.call(that);
      });
    }
  });

  function _drawChart () {
    var ctx;

    ctx = document.getElementById(this._uniqueId);
    this._pieChart = new Chart(ctx, {
      type: 'pie',
      data: this._data
    });
  };

  module.exports = Ctor;
}());
