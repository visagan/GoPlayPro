/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.elasticSearch.itemDetail')
        .factory('elasticSearchRest', ElasticSearchRest);

    ElasticSearchRest.$inject = ['$q','$http'];

    function ElasticSearchRest($q, $http) {
        var service = {};

        service.get = function(queryString) {
            //var url = '/mca/elasticSearch/itemDetail/?query=' + queryString;
            var url = '/mca/elasticSearch/itemDetail/?query='+queryString;

            return $http.get(url)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        };

        service.getScroll = function(scroll_id) {
            //var url ="http://localhost:9200/_search/scroll?pretty&scroll=1m&filter_path=hits.hits._source,_scroll_id&_source=department_id,department_class_id,item_id,tcin";
             var url = "/mca/elasticSearch/scroll/?scrollId=" +scroll_id;
             return $http.get(url)
                           .then(function(response) {
                               if (typeof response.data === 'object') {
                                   return response.data;
                               } else {
                                   // invalid response
                                   return $q.reject(response.data);
                               }
                           }, function(response) {
                               // something went wrong
                               return $q.reject(response.data);
                           });
        };

        return service;
    }

})();