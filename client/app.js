angular.module("ToDo", ['ngRoute']).config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/passwords/', {
                templateUrl: 'client/app/passwords/password.html',
            })
            .when('/contacts/', {
                templateUrl: 'client/app/contacts/contacts.html',
            })
            .when('/tasks/', {
                templateUrl: 'client/app/tasks/tasks.html',
            })
            .when('/#myModal', {
                templateUrl: 'client/app/contacts/contacts.html',
            })
            .when('/#myPopUp', {
                templateUrl: 'client/app/passwords/password.html',
            })
            .otherwise({
                redirectTo: '/tasks'
            });
    }]);