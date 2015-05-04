(function () {
    'use strict';

    angular
        .module('MYSITE')
        .directive('materialInput', materialInput);

    materialInput.$inject = ['$parse'];

    /* @ngInject */
    function materialInput($parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
          
            
            element.bind('focus keyup change paste propertychange', function (blurEvent) {

              console.log(element.val())

            });

            scope.$watch(attrs.ngModel, function (val) {
                if (angular.isDefined(val)) {
                    element.addClass("edited")
                } else {
                    element.removeClass("edited")
                }

            })

        }
    }

})();