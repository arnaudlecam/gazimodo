(function () {
  'use strict';

  // bouchon
  var List = [{
    id: 1,
    title: 'plop',
    state: '0'
  }, {
    id: 2,
    title: 'plop',
    state: '1'

  }, {
    id: 3,
    title: 'plop',
    state: '3'
  }, {
    id: 4,
    title: 'plop',
    state: '4'
  }];

  var tasks = [{
    id: 1,
    title: 'plop',
    description: 'description',
    created: new Date(2016, 1, 1)
  }, {
    id: 2,
    title: 'plop',
    description: 'description',
    created: new Date(2016, 1, 2)
  }, {
    id: 3,
    title: 'plop',
    description: 'description',
    created: new Date(2016, 1, 3)
  }, {
    id: 4,
    title: 'plop',
    description: 'description',
    created: new Date(2016, 1, 4)
  }];

  function _getById (apiToken, taskId) {
    for (var index in tasks) {
      if (tasks.hasOwnProperty(index) && tasks[index].id === taskId) {
        return tasks[index]; // Copying object
      }
    }
  }

  Ctor.prototype.$inject = ['$http', '$log'];
  function Ctor ($http, $log) {
    this._$http = $http;
    this._$log = $log;
  }

  Ctor.prototype.get = function (apiToken) {
    return List;
  };

  Ctor.prototype.getById = function (apiToken, taskId) {
    var task = _getById.call(apiToken, taskId);

    if (task) {
      return JSON.parse(JSON.stringify(task));
    }
    this._$log.info("[TaskService][getById]: la tache %d n'a pas été trouvé", taskId);
  };

  Ctor.prototype.modify = function (apiToken, task) {

  };

  Ctor.prototype.delete = function () {

  };

  module.exports = Ctor;
}());
