(function () {
  'use strict';

  var app = require('angular').module('hackthedata');

  app.controller('MainController', require('./mainController'));
  app.controller('HeaderController', require('./headerController'));
  app.controller('BoardController', require('./boardController'));
  app.controller('AccountController', require('./accountController'));
  require('./chart');
}());
