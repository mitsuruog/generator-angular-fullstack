(function() {
  'use strict';

  angular.module('<%= scriptAppName %>')
    .directive('debug', Debug);

  function Debug() {

    var directive = {
      templateUrl: 'components/debug/debug.html',
      restrict: 'EA',
      replace: true,
      transclude: true,
      link: link
    };

    return directive;

    ////////////

    function link(scope, element, attrs) {}

  }

})();