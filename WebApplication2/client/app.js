angular.module("ToDo", ['ngRoute']).config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/artem/', {
                templateUrl: 'client/app/artem/password.html',
            })
            .when('/irina/', {
                templateUrl: 'client/app/irina/contacts.html',
            })
            .when('/valerii/', {
                templateUrl: 'client/app/valerii/tasks.html',
            })
            .when('/valerii/:id', {
                templateUrl: 'client/app/valerii/tasks.html',
            })
            .when('/valerii/:id/:task/:import/:date', {
                templateUrl: 'client/app/valerii/tasks.html',
            })
            .otherwise({
                redirectTo: '/valerii'
            });
    }]);