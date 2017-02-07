// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider     

        // advent page that will use the AdventController
        .when('/advent', {
            templateUrl: 'views/advent.html',
            controller: 'AdventController'
        })

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });

    $locationProvider.html5Mode(true);

}]);