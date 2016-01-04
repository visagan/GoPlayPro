/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.elasticSearch.itemDetail')
        .factory('elasticSearchService', ElasticSearchService);

    ElasticSearchService.$inject = ['$q', 'elasticSearchRest'];

    function ElasticSearchService($q, elasticSearchRest) {
        var service = {};

        service.results = {};
        service.nextPage = {};

        service.search = function(queryString) {

            return elasticSearchRest.get(queryString)
                .then(function(data) {
                    // promise fulfilled
                    if (typeof data === 'object') {
                        service.processSearchResponse(data);
                    }
                }, function(data) {
                    // promise rejected
                    console.log(data);
            });
        }

        service.scroll = function(scroll_id) {
            return elasticSearchRest.getScroll(scroll_id)
                .then(function(data) {
                    // promise fulfilled
                    if (typeof data === 'object') {
                        service.processScrollResponse(data);
                    }
                }, function(data) {
                    // promise rejected
                    console.log(data);
            });
        }
        service.processSearchResponse = function(response) {
            service.results = response;
        };

        service.processScrollResponse = function(response) {
            service.nextPage = response;
        }
        return service;
    };
})();