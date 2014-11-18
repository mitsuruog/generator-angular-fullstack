(function(){
  'use strict';

  ////////////

  var ENV = {
    'debug': true
  };

  // Development specific configuration
  angular.module('config.ENV', [])
    .constant('ENV', ENV);

})();