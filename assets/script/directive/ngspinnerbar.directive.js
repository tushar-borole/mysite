(function () {
    'use strict';

    angular
        .module('AeroD')
        .directive('ngSpinnerBar', ngSpinnerBar);
    ngSpinnerBar.$inject = ['$rootScope'];

    /* @ngInject */
    function ngSpinnerBar($rootScope) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
        };
        return directive;

        function link(scope, element, attrs, controller) {
            // by defult hide the spinner bar
            element.addClass('hide'); // hide spinner bar by default

            // display the spinner bar whenever the route changes(the content part started loading)
            $rootScope.$on('$stateChangeStart', function () {
                element.removeClass('hide'); // show spinner bar
             /*   Layout.closeMainMenu();*/
            });

            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function () {
                element.addClass('hide'); // hide spinner bar

                $('body').removeClass('page-on-load'); // remove page loading indicator
               /* Layout.setMainMenuActiveLink('match'); // activate selected link in the sidebar menu*/

                // auto scorll to page top
          /*      setTimeout(function () {
                    Metronic.scrollTop(); // scroll to the top on content load
                }, $rootScope.settings.layout.pageAutoScrollOnLoad);*/
            });

            // handle errors
            $rootScope.$on('$stateNotFound', function () {
                element.addClass('hide'); // hide spinner bar
            });

            // handle errors
            $rootScope.$on('$stateChangeError', function () {
                element.addClass('hide'); // hide spinner bar
            });
        }
    }

})();