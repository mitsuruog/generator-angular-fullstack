(function(){
  'use strict';

  ////////////

  var ENV = {
    'debug': false
  };

  // Test specific configuration
  angular.module('config.ENV', [])
    .constant('ENV', ENV);  

})();