/*Author: Tushar Borole
Discription:rOOT OF ALL CONTROLLER
Copyright:Copyright:Seed Inc. 2014*/


/**
 * MainCtrl - controller
 */

(function () {
    'use strict';

    angular
        .module('AeroD')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$scope'];

    /* @ngInject */
    function MainController($http, $scope) {
        var main = this;
        main.name = 'MainController';


        activate();

        ////////////////

        function activate() {


            $http.get('assets/json/menubar.json').success(function (data) {
                main.menubarJson = data;
            });
            $scope.chartOptions = {
                'position': 'topleft',
                'digestTimeThreshold': 100,
                'autoload': false,
                'logDigest': true,
                'logWatches': true
            };

          /*  showAngularStats($scope.chartOptions)*/


        }
    }
})();