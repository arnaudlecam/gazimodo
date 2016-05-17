(function () {
  'use strict';

  function Ctor () {

  }

  // Etabli un contexte pour la closure de l'accesseur
  function _buildGetter (elementName) {
    Object.defineProperty(Ctor.prototype, elementName, {
      enumerable: true,
      get: function () {
        var index = elementName;
        return individuTitreEnum[index];
      }
    });
  }

  Ctor.prototype.build = function () {
    // Initialisation des accesseurs en ReadOnly
    for (var elementName in individuTitreEnum) {
      if (individuTitreEnum.hasOwnProperty(elementName)) {
        _buildGetter(elementName);
      }
    }
  };

  module.exports = function() {};
}());
