/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.register')
        .factory('registerRest', RegisterRest);

    RegisterRest.$inject = ['$q','$http', '$rootScope', '$cookies'];

    function RegisterRest($q, $http, $rootScope, $cookies) {
        var service = {};

        service.post = function(credentials) {
              var url = '/register';

              var body = credentials;


            return $http.post(url, {
                    body
                    })
                .then(function(response) {
                    if (typeof response.data === 'object') {

                        console.log(response.data);
                        return response.data;
                    } else {
                        // invalid response
                        $rootScope.authenticated = false;
                        $cookies.put("autehnticated", "false");
                        return $q.reject(response.data);
                    }
                }, function(response) {

                    // something went wrong
                     $rootScope.authenticated = false;
                    return $q.reject(response.data);
                });
        };

        return service;
    }

})();