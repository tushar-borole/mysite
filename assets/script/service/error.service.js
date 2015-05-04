/**
 * @description Service to show errro message in application
 * @copyright 2014 © AeroD. All Rights Reserved.
 * @author Tushar Borole
 * @createDate 05/04/2015
 */ 

(function () {
    'use strict';

    angular
        .module('AeroD')
        .service('errorService', errorService);

    errorService.$inject = ['$http', '$translate', 'toastr'];

    /* @ngInject */
    function errorService($http, $translate, toastr) {
        this.showError = showError;

        ////////////////

        function showError(text, type, isTranslate) {
            
               var message = isTranslate == false ? text : $translate.instant(text);
            
            console.log(message);
            toastr[type](message);
        }
    }
})();