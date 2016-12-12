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
            .when('/#myModal', {
                templateUrl: 'client/app/irina/contacts.html',
            })
            .when('/#myPopUp', {
                templateUrl: 'client/app/artem/password.html',
            })
            .otherwise({
                redirectTo: '/valerii'
            });
    }]);