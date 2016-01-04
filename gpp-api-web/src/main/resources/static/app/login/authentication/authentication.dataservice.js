/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.login.authentication')
        .factory('authenticationRest', AuthenticationRest);

    AuthenticationRest.$inject = ['$q','$http', '$rootScope', '$cookies'];

    function AuthenticationRest($q, $http, $rootScope, $cookies) {
        var service = {};

        service.get = function(credentials) {
              var url = '/user';

              var headers = credentials ? {
                authorization : "Basic "
                    + btoa(credentials.userName + ":"
                        + credentials.passWord)
              } : {};

            return $http.get(url, {
                    headers : headers
                })
                .then(function(response) {

                    if (typeof response.data === 'object') {


                        $rootScope.authenticated = true;
                        $cookies.put("autehnticated", "true");
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