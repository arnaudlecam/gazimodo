(function () {
  'use strict';

  var instance;

  factory.prototype.$inject = ['EnumBuilder'];
  function factory (EnumBuilder) {
    if (!instance) {
      instance = EnumBuilder;
    }
    return instance;
  }

  // Fonction éxecuter par la factory de angular
  module.exports = factory;
}());
