(function () {
  'use strict';

  Ctor.prototype.$inject = ['UserService'];
  function Ctor (UserService) {
    this.UserService = UserService;
    var tmp = UserService.get();
    this._user = {};
    for (var key in tmp) {
      if (tmp.hasOwnProperty(key)) {
        this._user[key] = tmp[key];
      }
    }
  }

  Ctor.prototype.save = function () {
    this.UserService.save(this._user);
  };

  Ctor.prototype.undo = function () {
    var tmp;

    this._user = this.UserService.get();
    for (var key in tmp) {
      if (tmp.hasOwnProperty(key)) {
        this._user[key] = tmp[key];
      }
    }
  };

  Object.defineProperty(Ctor.prototype, 'nom', {
    enumerable: true,
    get: function () {
      return this._user.lastName;
    },
    set: function (value) {
      this._user.lastName = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'prenom', {
    enumerable: true,
    get: function () {
      return this._user.firstName;
    },
    set: function (value) {
      this._user.firstName = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'surface', {
    enumerable: true,
    get: function () {
      return this._user.surface;
    },
    set: function (value) {
      this._user.surface = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'nbAbonne', {
    enumerable: true,
    get: function () {
      return this._user.nbAbonne;
    },
    set: function (value) {
      this._user.nbAbonne = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'commune', {
    enumerable: true,
    get: function () {
      return this._user.commune;
    },
    set: function (value) {
      this._user.commune = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aChauffage', {
    enumerable: true,
    get: function () {
      return this._user.aChauffage;
    },
    set: function (value) {
      this._user.aChauffage = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aEauChaude', {
    enumerable: true,
    get: function () {
      return this._user.aEauChaude;
    },
    set: function (value) {
      this._user.aEauChaude = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aCuisson', {
    enumerable: true,
    get: function () {
      return this._user.aCuisson;
    },
    set: function (value) {
      this._user.aCuisson = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'typeLogement', {
    enumerable: true,
    get: function () {
      return this._user.typeLogement;
    },
    set: function (value) {
      this._user.typeLogement = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'nbOccupants', {
    enumerable: true,
    get: function () {
      return this._user.nbOccupants;
    },
    set: function (value) {
      this._user.nbOccupants = value;
    }
  });

  module.exports = Ctor;
}());
