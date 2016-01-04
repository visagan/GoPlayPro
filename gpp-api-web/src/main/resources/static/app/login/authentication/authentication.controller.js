/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.authentication')
        .controller('AuthenticationController', AuthenticationController);

    AuthenticationController.$inject = ['$scope', 'authenticationService' , '$state', '$cookies'];

    function AuthenticationController($scope, authenticationService, $state, $cookies) {
        var vm = this;
        $scope.vm = vm;
        vm.credentials = {};
        vm.credentials.username = "";
        vm.credentials.password = "";

        vm.authenticate = function() {


            authenticationService.authenticate(vm.credentials)
                .then(function() {
                    // promise fulfilled
                   $cookies.put("authenticated", "true");
                   $scope.authenticated = true;
                   $state.go('app');
                }, function(data) {
                   // promise rejected
                   $scope.authenticated = false;
                    console.log(data);
                });
        };
    }

})();