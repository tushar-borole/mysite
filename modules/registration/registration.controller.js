/**
 * @description Controller for registrationpage
 * @author Tushar Borole
 * @createDate 04/30/2015
 * @copyright 2014 © MYSITE. All Rights Reserved.
 */



(function () {
    'use strict';

    angular
        .module('MYSITE')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$rootScope', 'registrationFactory', 'errorService'];

    /* @ngInject */
    function RegistrationController($rootScope, registrationFactory, errorService) {
        var registration = this;
        registration.name = 'RegistrationController';
        registration.submitted = false;


        activate();

        ////////////////

        function activate() {



            /**
             * @description register a user
             * @param {Boolean} isValid If form is valid
             * @lastmodifiedBy Tushar Borole
             * @lastmodifiedDate 05/04/2015
             */
            registration.registerUser = function (isValid) {
                if (isValid) {
                    var registerData=angular.copy(registration.register);
                    registerData.domain=  registerData.domain.concat('.MYSITE.com');
                    registrationFactory.registerUser(registerData).then(function () {
                        errorService.showError('register.error.registersuccess', 'success');
                    }, function (data) {
                        errorService.showError(data.data.message, 'error',false);
                    });

                }

            };
        }
    }
})();