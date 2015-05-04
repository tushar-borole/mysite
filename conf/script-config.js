/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Seed Inc. 2014*/
(function () {
    'use strict';

    angular
        .module('MYSITE').config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
            'use strict';

            // Lazy Load modules configuration
            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
                modules: APP_REQUIRES.modules
            });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
                'use strict';
                // registering components after bootstrap
                App.controller = $controllerProvider.register;
                App.directive = $compileProvider.directive;
                App.filter = $filterProvider.register;
                App.factory = $provide.factory;
                App.service = $provide.service;
                App.constant = $provide.constant;
                App.value = $provide.value;

}]).config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'assets/i18/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('en');
            $translateProvider.useLocalStorage();
            $translateProvider.usePostCompiling(true);

}]).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeBar = true;
            cfpLoadingBarProvider.includeSpinner = false;
            cfpLoadingBarProvider.latencyThreshold = 500;
            cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}]).config(['$tooltipProvider', function ($tooltipProvider) {

            $tooltipProvider.options({
                appendToBody: true
            });

}]).config(['RestangularProvider', function (RestangularProvider) {

            RestangularProvider.setDefaultHeaders({
                Referer: "www.foo.com"
            });

}]).config(['ngFabFormProvider', function (ngFabFormProvider) {

            /*It is custom insert for ngFabFor directive*/
            var customInsertFn = function (compiledAlert, el, attrs) {
                console.log(el.parent().hasClass('form-md-line-input'))
                var hasMaterial = el.hasClass('isMaterial')
                var hasMaterialCheckbox = el.hasClass('md-check')
                    // insert after or after parent if checkbox or radio

                if (hasMaterial) {
                    el.parent().after(compiledAlert);
                } else if (hasMaterialCheckbox) {
                    el.parent().after(compiledAlert);
                } else {
                    el.after(compiledAlert);
                }

                if (el.hasClass("currency")) {
                    el.closest('.input-group').after(compiledAlert);



                }
            };
            ngFabFormProvider.setInsertErrorTplFn(customInsertFn);

            ngFabFormProvider.extendConfig({
                setAsteriskForRequiredLabel: true,
                validationsTemplate: 'common/views/validationtemplate.html',
            });
            /*Settign to custom scroll ng form is invalid*/
            var customScrollToFn = function (targetElement, duration, scrollOffset) {
                console.log(targetElement)
                targetElement.scrollIntoView(true);
                targetElement.focus();
            };
            ngFabFormProvider.setScrollToFn(customScrollToFn);

}]);
}());