/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.authentication')
        .factory('authenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$q', 'authenticationRest'];

    function AuthenticationService($q, authenticationRest) {
        var service = {};

        service.results = {};
        service.nextPage = {};

        service.loggedIn = false;

        service.authenticate = function(credentials) {

            return authenticationRest.get(credentials)
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