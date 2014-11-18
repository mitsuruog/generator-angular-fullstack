(function(){
  'use strict';

  ////////////

  var ENV = {
    'debug': false
  };

  // Production specific configuration
  angular.module('config.ENV', [])
    .constant('ENV', ENV);  

})();