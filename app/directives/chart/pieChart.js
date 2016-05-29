(function () {
  'use strict';

  module.exports = function () {
    return {
      restrict: 'E',
      templateUrl: '/chart.html',
      scope: {
        data: '='
      },
      controller: 'chart.PieChartController',
      controllerAs: 'chartCtrl',
      link: function (scope, element, attrs, controller) {
        controller.data = scope.data;
      }
    };
  };
}());
