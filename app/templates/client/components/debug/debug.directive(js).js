(function() {
  'use strict';

  angular.module('<%= scriptAppName %>')
    .directive('debug', Debug);

  function Debug(ENV) {

    var directive = {
      templateUrl: 'components/debug/debug.html',
      restrict: 'EA',
      replace: true,
      transclude: true,
      link: link
    };

    return directive;

    ////////////

    function link(scope, element, attrs) {
      scope.debug = ENV.debug;
    }

  }

})();