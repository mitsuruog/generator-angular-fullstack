(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .controller('AlertBoxCtrl', AlertBoxCtrl);

  function AlertBoxCtrl(Alert) {

    var vm = this;

    vm.alerts = Alert.alerts;
    vm.closeAlert = closeAlert;

    ////////////

    function closeAlert(index) {
      Alert.remove(index);
    }

  }

})();
