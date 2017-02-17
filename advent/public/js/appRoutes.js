// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider     

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // advent page that will use the AdventController
        .when('/advent', {
            templateUrl: 'views/advent.html',
            controller: 'AdventController'
        });

    $locationProvider.html5Mode(true);

}]);