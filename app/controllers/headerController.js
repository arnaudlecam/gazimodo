(function () {
  'use strict';

  Ctor.prototype.$inject = ['UserService'];
  function Ctor (UserService) {
    this._userService = UserService;
    this._user = UserService.connect('toto', 'toto');
  }

  Object.defineProperty(Ctor.prototype, 'id', {
    enumerable: true,
    get: function () {
      return this._user.id;
    },
    set: function (value) {
      this._user.id = value;
    }
  });

  module.exports = Ctor;
}());
