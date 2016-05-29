(function () {
  'use strict';

  function Ctor () {
  }

  Ctor.prototype.get = function (apiKey) {
    return [{
      url: '/board/1',
      label: 'Synthése'
    }, {
      url: '/board/1/1',
      label: 'Habitation 1'
    }, {
      url: '/board/1/2',
      label: 'Habitation 2'
    }];
  };

  Ctor.prototype.getUptake = function (apiKey, idHabitation) {
    return {
      emissionsCO2: [4515, 3014, 4000, 3554, 4515, 3014, 4000, 3554, 4515, 3014, 4000, 3554],
      temperatures: [5, 5, 4, 7, 12, 7, 21, 22, 17, 14, 9, 0],
      consommationsKwh: [142, 125, 150, 164, 142, 125, 150, 164, 142, 125, 150, 164],
      consommationsEuro: [50, 40, 65, 35, 50, 40, 65, 35, 50, 40, 65, 35],
      periode: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    };
  };

  Ctor.prototype.getComparisonConsumption = function (apiKey, idHabitation) {
    return {
      lowConsumption: [25, 28, 26, 30, 25, 28, 26, 30, 25, 28, 26, 30],
      highConsumption: [50, 52, 51, 60, 50, 52, 51, 60, 50, 52, 51, 60],
      currentConsumption: [35, 29, 33, 46, 55, 20, 35, 29, 30, 33, 46, 34],
      periode: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    };
  };

  module.exports = Ctor;
}());
