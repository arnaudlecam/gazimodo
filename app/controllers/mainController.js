(function () {
  'use strict';

  Ctor.prototype.$inject = ['UserService'];
  function Ctor (UserService) {
    this.UserService = UserService;
    this._survey = {};
  }

  Ctor.prototype.saveSurvey = function () {
    this.UserService.saveSurvey(null, this._survey);
    this._user = this.UserService.get();
  };

  Object.defineProperty(Ctor.prototype, 'nbAbonne', {
    enumerable: true,
    get: function () {
      return this._survey.nbAbonne;
    },
    set: function (value) {
      this._survey.nbAbonne = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'commune', {
    enumerable: true,
    get: function () {
      return this._survey.commune;
    },
    set: function (value) {
      this._survey.commune = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aChauffage', {
    enumerable: true,
    get: function () {
      return this._survey.aChauffage;
    },
    set: function (value) {
      this._survey.aChauffage = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aEauChaude', {
    enumerable: true,
    get: function () {
      return this._survey.aEauChaude;
    },
    set: function (value) {
      this._survey.aEauChaude = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'aCuisson', {
    enumerable: true,
    get: function () {
      return this._survey.aCuisson;
    },
    set: function (value) {
      this._survey.aCuisson = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'surface', {
    enumerable: true,
    get: function () {
      return this._survey.surface;
    },
    set: function (value) {
      this._survey.surface = value;
    }
  });


  Object.defineProperty(Ctor.prototype, 'typeLogement', {
    enumerable: true,
    get: function () {
      return this._survey.typeLogement;
    },
    set: function (value) {
      this._survey.typeLogement = value;
    }
  });

  Object.defineProperty(Ctor.prototype, 'nbOccupants', {
    enumerable: true,
    get: function () {
      return this._survey.nbOccupants;
    },
    set: function (value) {
      this._survey.nbOccupants = value;
    }
  });

  module.exports = Ctor;
}());
