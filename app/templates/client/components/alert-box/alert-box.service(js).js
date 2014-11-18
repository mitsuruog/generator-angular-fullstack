(function() {
  'use strict';

  angular.module('<%= scriptAppName %>')
    .factory('Alert', Alert);

  function Alert($timeout) {

    var alerts = [];

    // Public API here
    var service = {
      alerts: alerts,
      error: error,
      warning: warning,
      success: success,
      info: info,
      remove: remove
    };

    return service;

    ////////////
    function error(message, options) {
      showMessage({
        type: 'danger',
        msg: message
      }, options);
    }

    function warning(message, options) {
      showMessage({
        type: 'warning',
        msg: message
      }, options);
    }

    function success(message, options) {
      showMessage({
        type: 'success',
        msg: message
      }, options);
    }

    function info(message, options) {
      showMessage({
        type: 'info',
        msg: message
      }, options);
    }

    function remove(index) {
      alerts.splice(index, 1);
    }

    function showMessage(message, options) {
      options = options || {};
      alerts.push(message);

      // when expired is false, alert-box is not expired
      if (options.expired === false) {
        return;
      }

      var expired = options.expired || 3000;
      $timeout(function() {
        var index = alerts.indexOf(message);
        alerts.splice(index, 1);
      }, expired);

    }

  }

})();