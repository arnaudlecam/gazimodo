(function () {
  'use strict';

  function Ctor () {
    this._test = 'toto';
  }

  Object.defineProperty(Ctor.prototype, 'test', {
    enumerable: true,
    get: function () { return this._test; },
    set: function (value) { this._test = value; }
  });

  module.exports = Ctor;
}());
