/**
 * @description Service to show errro message in application
 * @copyright 2014 © MYSITE. All Rights Reserved.
 * @author Tushar Borole
 * @createDate 05/04/2015
 */ 

(function () {
    'use strict';

    angular
        .module('MYSITE')
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