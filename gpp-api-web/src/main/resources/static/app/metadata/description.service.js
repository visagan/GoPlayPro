/**
 * Created by visagan on 1/1/16.
 */

/*
Service for holding descriptions for various bits of data used across site
 */
(function() {
    'use strict';

    angular
        .module('app.metadata')
        .factory('descriptionService', DescriptionService);

    DescriptionService.$inject = ['$q','$http'];

    function DescriptionService($q, $http) {
        var service = {};

        service.getTargetServiceLevels = function() {
            if (typeof service.target_service_levels !== 'undefined') {
                return $q.when(service.target_service_levels);
            }

            var url = '/mca/servicelevels/target/descriptions';
            return $http.get(url)
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        service.target_service_levels = response.data.body;
                        return service.target_service_levels;
                    } else {
                        // invalid response
                        $q.reject(response.data);
                    }
                }, function (response) {
                    // something went wrong
                    $q.reject(response);
                });
        };

        return service;
    }
})();