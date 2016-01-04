/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';
    angular
        .module('gpp', [
            'ui.router',
            'ui.sortable',
            'ngAnimate',
            'ngFileUpload',
            'app.core',
            'app.elasticSearch',
            'app.metadata',
            'app.login',
            'infinite-scroll',
            'ngCookies'


        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            // Root level route here, all other routes defined in their modules
            $stateProvider
                // Base Route
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'app/layout/header.html'

                        },
                        'content': {
                            templateUrl: 'app/layout/content.html'
                            //resolve: { authenticate: authenticate }
                        }
                    }
                })
                .state('app.logout', {
                    url: '/logout',
                    controller: function($scope, $route, $cookies, Session) {
                      $cookies.remove("authenticated");
                      Session.clear();
                      $route.reload();
                    }
                 })


        }
        ])
        .run(function($rootScope, $state, $location, $cookies){
           // $rootScope.$on('$locationChangeSuccess', function(event, toState, toParams, fromState, fromParams){
           $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

            if (toState.name == 'app.login.authentication' || toState.name == 'app.login.register'
                || $cookies.get("authenticated") === 'true') {
              return;
            }

            event.preventDefault();

            if  (typeof $rootScope.authenticated !== 'undefined'
                    && $rootScope.authenticated == true
                    && $cookies.get("authenticated") === 'true'
             ){
                 $state.go(toState, toParams)
                 return;
            } else {
                $state.go('app.login.authentication');
            }
        });
});

})();