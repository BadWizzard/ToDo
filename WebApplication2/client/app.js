angular.module("ToDo", ['ngRoute']).config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/passwords/', {
                templateUrl: 'client/app/passwords/password.html',
            })
            .when('/passwords/:id', {
                templateUrl: 'client/app/passwords/password.html',
            })
            .when('/contacts/', {
                templateUrl: 'client/app/contacts/contacts.html',
            })
            .when('/contacts/:id', {
                templateUrl: 'client/app/contacts/contacts.html',
            })
            .when('/tasks/', {
                templateUrl: 'client/app/tasks/tasks.html',
            })
            .when('/tasks/:id', {
                templateUrl: 'client/app/tasks/tasks.html',
            })
            .otherwise({
                redirectTo: '/tasks'
            });
    }]);