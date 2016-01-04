/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular.module('app.elasticSearch', ['app.elasticSearch.itemDetail'])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('app.elasticSearch', {
                    abstract: true,
                    url:'elasticSearch/'
                })
                .state('app.elasticSearch.itemDetail', {
                    url: 'itemDetail?query',
                    views: {
                        'content@': {   // this 'content@' means to replace the content ui-view in index.html
                            templateUrl: 'app/elasticSearch/itemDetail/detail.html',
                            controller: 'ElasticSearchController'
                        },
                        'basic@app.elasticSearch.itemDetail': {
                            // replace the 'basic' ui-view in the app.elasticSearch.itemDetail state
                            templateUrl: 'app/elasticSearch/itemDetail/basic.html'
                        }
                    }
                })
        }]);
})();