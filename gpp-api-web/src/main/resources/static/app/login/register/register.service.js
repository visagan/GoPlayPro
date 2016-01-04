/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.register')
        .factory('registerService', RegisterService);

    RegisterService.$inject = ['$q', 'registerRest'];

    function RegisterService($q, registerRest) {
        var service = {};

        service.results = {};
        service.nextPage = {};

        service.loggedIn = false;

        service.register = function(credentials) {

            return registerRest.post(credentials)
                .then(function(data) {
                    return data;
                    // promise fulfilled
                    console.log(data);
                }, function(data) {
                    // promise rejected
                    console.log(data);
            });
        }
        return service;
    };
})();