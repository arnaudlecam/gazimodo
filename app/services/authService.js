(function () {
  'use strict';

  Ctor.prototype.$inject = ['$http'];
  function Ctor ($http) {
    this._$http;
  }

  Ctor.prototype.connect = function (username, password) {
    return 'a54a4a5a4a'; // api token
  };

  module.exports = Ctor;
}());
