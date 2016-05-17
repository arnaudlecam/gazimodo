(function () {
  'use strict';

  window.$ = window.jQuery = require('jquery');
  require('bootstrap');

  // Initalisation de l'application est appelé dans la page par require('app').init();
  module.exports.init = function () {
    require('angular').module('todoList', ['ngRoute']); // <-- Initialisation de Angular
    require('angular-route'); // <-- Initialisation de ngRoute

    require('./builders'); // <-- Initialisation des builders
    require('./services'); // <-- Initialisation des services
    require('./controllers'); // <-- Initialisation des controleurs
    require('./routes'); // <-- Initialisation des routes
    require('./directives'); // <-- Initialisation des directives
  };
}());
