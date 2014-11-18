(function(){
  'use strict';

  angular.module('<%= scriptAppName %>')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(<% if(filters.socketio) { %>$scope, <% } %>$log, $http<% if(filters.socketio) { %>, socket<% } %>, ENV) {

    var vm = this;
    vm.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      vm.awesomeThings = awesomeThings;<% if(filters.socketio) { %>
      socket.syncUpdates('thing', vm.awesomeThings);<% } %>
    });
<% if(filters.mongoose) { %>
    vm.addThing = function() {
      if(vm.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: vm.newThing });
      vm.newThing = '';
    };

    vm.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });<% } %>

    ////////////

  }

})();