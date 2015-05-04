(function () {
    'use strict';

    angular
        .module('MYSITE')
        .directive('showStats', showStats);

    showStats.$inject = ['$parse'];

    /* @ngInject */
    function showStats($parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'show-stats-template'
        };
        return directive;

        function link(scope, element, attrs, controller) {

            scope.controls = {};
            initScopeWithPresets();
            var watchRun = false; // don't autoload if that's not the preset...
            scope.chartVisible = false;

            scope.$watch('controls', function (newVal) {
                if (!watchRun) {
                    watchRun = true;
                    if (!newVal.autoload) {
                        return;
                    }
                }
                updateChartOptions();
                showAngularStats(scope.chartOptions);
                scope.chartVisible = true;
            }, true);

            scope.toggleVisibility = function () {
                if (scope.chartVisible) {
                    showAngularStats(false);
                    initScopeWithPresets();
                } else {
                    updateChartOptions();
                    showAngularStats(scope.chartOptions);
                }
                scope.chartVisible = !scope.chartVisible;
            };

            function initScopeWithPresets() {
                var sessionStoragePresets = JSON.parse(sessionStorage.getItem('showAngularStats_autoload'));
                var presets = sessionStoragePresets;
                presets = presets || {};
                presets.autoload = !!sessionStoragePresets;
                presets = angular.extend({
                    position: 'top-left',
                    digestTimeThreshold: 16,
                    autoload: false,
                    logDigest: true,
                    logWatches: true
                }, presets);

                scope.controls.tb = presets.position.indexOf('bottom') !== -1 ? 'bottom' : 'top';
                scope.controls.lr = presets.position.indexOf('right') !== -1 ? 'right' : 'left';
                scope.controls.threshold = presets.digestTimeThreshold;
                angular.extend(scope.controls, presets);
                updateChartOptions();
            }

            function updateChartOptions() {
                scope.chartOptions = {
                    position: scope.controls.tb + scope.controls.lr,
                    digestTimeThreshold: scope.controls.threshold,
                    autoload: scope.controls.autoload,
                    logDigest: scope.controls.logDigest,
                    logWatches: scope.controls.logWatches
                };
            }

        }
    }


})();