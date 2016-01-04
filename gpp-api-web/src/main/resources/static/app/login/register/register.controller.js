/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.register')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', 'registerService' , '$state', '$cookies'];

    function RegisterController($scope, registerService, $state, $cookies) {
        var vm = this;
        $scope.vm = vm;
        vm.credentials = {};
        vm.credentials.username = "";
        vm.credentials.password = "";

        vm.register = function() {


            registerService.register(vm.credentials)
                .then(function() {
                    // promise fulfilled
                   $state.go('app.login');
                }, function(data) {
                   // promise rejected
                   $scope.authenticated = false;
                    console.log(data);
                });
        };
    }

})();