/**
 * @description Factory for registration Controller@abstract
 * @author Tushar Borole
 * @copyright 2014 © MYSITE. All Rights Reserved.
 * @createDate 04/30/2015
 */ 



(function () {
    'use strict';
    angular
        .module('MYSITE')
        .factory('registrationFactory', registrationFactory);

    registrationFactory.$inject = ['Restangular','APP_URL','$enviornment'];

    /* @ngInject */
    function registrationFactory(Restangular,APP_URL,$enviornment) {
        var exports = {
            registerUser: registerUser
        };


        return exports;

        ////////////////

        /**
         * @description Http data to be posted
         * @param   {object} data Http data to be posted
         * @returns {object} Restangualr object
         */
        function registerUser(data) {
            var url = APP_URL[$enviornment.urlname].register;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type](data);

        }
    }
})();