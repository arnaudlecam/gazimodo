(function () {
  'use strict';

  Ctor.prototype.$inject = ['TaskService'];
  function Ctor (TaskService, TaskStateEnum) {
    this._list = TaskService.get();
  }

  Object.defineProperty(Ctor.prototype, 'list', {
    enumerable: true,
    get: function () { return this._list; },
    set: function (value) { this._list = value; }
  });

  Ctor.prototype.getTaskClass = function () {

  };

  module.exports = Ctor;
}());
