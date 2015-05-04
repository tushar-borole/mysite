/*Author: Tushar Borole
Discription:It contain url depend on mock or development
Copyright:Seed Inc. 2014*/
(function () {
    'use strict';
     angular
        .module('MYSITE').constant('APP_URL', {
        'development': {
            'register': 'reseller/account'

        },
        'mock': {
            'register': 'modules/registration/json/register.json'
        }
    });
}());