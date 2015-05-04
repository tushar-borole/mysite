(function () {
    'use strict';
    angular
        .module('AeroD')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['Restangular','APP_URL','$enviornment'];

    /* @ngInject */
    function loginFactory(Restangular,APP_URL,$enviornment) {
        var exports = {
            login: login
        };


        return exports;

        ////////////////

        function login() {
            var url = APP_URL[$enviornment.urlname].login;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }
    }
})();