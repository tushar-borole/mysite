/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Seed Inc. 2014*/

angular
    .module('AeroD').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
            'use strict';

            // Set the following to true to enable the HTML5 Mode
            // You may have to set <base> tag in index and a routing configuration in your server
            $locationProvider.html5Mode(false);

            // default route
            $urlRouterProvider.otherwise('/app/login');

            // 
            // Application Routes
            // -----------------------------------   
            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'common/views/app.html',
                    controller: 'MainController',
                    controllerAs: 'main',
                    resolve: helper.resolveFor('global','modernizr', 'icons', 'toaster', 'sweetalert')
                })
                .state('app.login', {
                    url: '/login',
                    title: 'Single View',
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login',
                    resolve: helper.resolveFor( 'login'),
                    data: {
                        permissions: {
                            only: ['admin', 'moderator']
                        }
                    }
                })
              .state('app.registration', {
                    url: '/registration',
                    title: 'Single View',
                    templateUrl: 'modules/registration/registration.html',
                    controller: 'RegistrationController',
                    controllerAs: 'registration',
                    resolve: helper.resolveFor('toaster','registration','ui.select'),
                    data: {
                        permissions: {
                            only: ['admin', 'moderator']
                        }
                    }
                })
                .state('app.submenu', {
                    url: '/submenu',
                    title: 'Submenu',
                    templateUrl: 'common/views/submenu.html'
                })
                // 
                // CUSTOM RESOLVES
                //   Add your own resolves properties
                //   following this object extend
                //   method
                // ----------------------------------- 
                // .state('app.someroute', {
                //   url: '/some_url',
                //   templateUrl: 'path_to_template.html',
                //   controller: 'someController',
                //   resolve: angular.extend(
                //     helper.resolveFor(), {
                //     // YOUR RESOLVES GO HERE
                //     }
                //   )
                // })
            ;


}]);