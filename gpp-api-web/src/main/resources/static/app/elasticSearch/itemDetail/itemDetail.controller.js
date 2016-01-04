/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app.elasticSearch.itemDetail')
        .controller('ElasticSearchController', ElasticSearchController);

    ElasticSearchController.$inject = ['$scope', 'elasticSearchService'];

    function ElasticSearchController($scope, elasticSearchService, Upload) {
        var vm = this;
        $scope.vm = vm;
        vm.hasSearchResponse = false;
        vm.hasSearchResults = false;

        vm.busy = false;
        vm.after = "";

        vm.queryString = "";

        vm.results = {};
        vm.items = [];
        vm.nextPage = [];
        vm.nextPageItems = [];
        //vm.dragOpts = {accept:'dragover', reject:'dragover-err', pattern:'text/csv'};

        vm.isSearching = false;

        vm.search = function() {
            vm.isSearching = true;
            vm.hasSearchResponse = false;
            vm.hasSearchResults = false;


            elasticSearchService.search(vm.queryString)
                .then(function() {
                    // promise fulfilled
                    vm.updateVmFromChange();
                    vm.isSearching = false;
                }, function(data) {
                   // promise rejected
                    console.log(data);
                    vm.isSearching = false;
                });
        };

        vm.updateVmFromChange = function() {
            vm.results = elasticSearchService.results;
            vm.after = elasticSearchService.results._scroll_id;
            vm.items = vm.results.hits.hits;
            vm.hasSearchResults = true;
        };



        vm.loadFromElasticSearchScroll = function() {
           if (vm.busy) return;
           vm.busy = true;
           //vm.scroll_query.scroll = "5m";
           //vm.scroll_query.scroll_id = vm.after;

           elasticSearchService.scroll(vm.after)
                           .then(function() {
                               // promise fulfilled
                               vm.nextPage = elasticSearchService.nextPage;
                               vm.nextPageItems = vm.nextPage.hits.hits;
                               for (var i=0; i<vm.nextPageItems.length; i++) {
                                  vm.items.push(vm.nextPageItems[i]);
                               }
                               vm.after = elasticSearchService.nextPage._scroll_id;
                           }, function(data) {
                              // promise rejected
                               console.log(data);
                           });

             vm.busy = false;
         };
    }

})();