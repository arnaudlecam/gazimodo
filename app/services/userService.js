(function () {
  'use strict';

  var app = require('angular').module('hackthedata');
  app.value('Key', 'ozjodzjodz2972');

  var userInfos = {
    id: 1,
    username: 'toto',
    firstName: 'charlie',
    lastName: 'root',
    apiKey: 'ozjodzjodz2972'
  };

  Ctor.prototype.$inject = [];
  function Ctor () {
  };

  Ctor.prototype.connect = function (username, password) {
    return userInfos;
  };

  Ctor.prototype.get = function (apiKey) {
    return userInfos;
  };

  Ctor.prototype.saveSurvey = function (apiKey, survey) {
    for (var Key in survey) {
      if (survey.hasOwnProperty(Key)) {
        userInfos[Key] = survey[Key];
      }
    }
  };

  Ctor.prototype.save = function (userInfos) {
    for (var Key in userInfos) {
      if (userInfos.hasOwnProperty(Key)) {
        userInfos[Key] = userInfos[Key];
      }
    }
  };

  module.exports = Ctor;
}());
