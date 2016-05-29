(function () {
  'use strict';

  module.exports = function () {
    return {
      restrict: 'E',
      templateUrl: 'chart.html',
      scope: {
        data: '=',
        typeAxis: '='
      },
      controller: 'chart.ConsoChartController',
      controllerAs: 'chartCtrl',
      link: function (scope, element, attrs, controller) {
        controller.data = scope.data;
        controller.typeAxis = scope.typeAxis;
      }
    };
  };
}());
