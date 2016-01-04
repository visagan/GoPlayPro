/**
 * Created by visagan on 1/1/16.
 */
(function() {
    'use strict';

    angular.module('app.login', ['app.login.authentication', 'app.login.register'])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('app.login', {
                    abstract: true,
                    url:'login/'
                })
                .state('app.login.authentication', {
                    url: 'auth/',
                    views: {
                        'content@': {   // this 'content@' means to replace the content ui-view in index.html
                            templateUrl: 'app/login/authentication/detail.html',
                            controller: 'AuthenticationController'
                        }

                    }
                })
                .state('app.login.register', {
                    url: 'register/',
                    views: {
                        'content@': {   // this 'content@' means to replace the content ui-view in index.html
                            templateUrl: 'app/login/register/detail.html',
                            controller: 'RegisterController'
                        }

                    }
                 })
        }]);
})();