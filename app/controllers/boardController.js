(function () {
  'use strict';

  Ctor.prototype.$inject = ['DashboardService', 'Key', '$routeParams'];
  function Ctor (DashboardService, Key, $routeParams) {
    console.log('habitation ' + $routeParams.habitationId);
    this._leftMenu = DashboardService.get(Key);
    this._uptake = DashboardService.getUptake(Key, $routeParams.habitationId);
    this._comparisonConsumption = DashboardService.getComparisonConsumption(Key, $routeParams.habitationId);
    this._dataSource = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3]
      }]
    };
  }

  Object.defineProperty(Ctor.prototype, 'consoTypeAxis', {
    enumerable: true,
    get: function () {
      return this._consoTypeAxis;
    },
    set: function (value) {
      this._consoTypeAxis = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'leftMenu', {
    enumerable: true,
    get: function () {
      return this._leftMenu;
    }
  });

  Object.defineProperty(Ctor.prototype, 'uptake', {
    enumerable: true,
    get: function () {
      return this._uptake;
    },
    set: function (value) {
      this._uptake = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'comparisonConsumption', {
    enumerable: true,
    get: function () {
      return this._comparisonConsumption;
    },
    set: function (value) {
      this._comparisonConsumption = value;
    }
  });

  module.exports = Ctor;
}());
