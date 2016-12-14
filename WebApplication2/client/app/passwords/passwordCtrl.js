(function () {

    var moduleId = "noteBookCtrl";
    angular.module("ToDo").controller(moduleId, ['$http', noteBookCtrl]);

    function noteBookCtrl($http) {

        var vm = this;
        vm.filterBySite = "";
        vm.sortField = "site";
        vm.reverse = false;
        vm.diary = [];
        vm.save = save;
        vm.sort = sort;
        vm.currentInf = null;
        vm.add = add;
        vm.edit = edit;
        vm.delete = del;
        
        init();

        function save() {
            console.log("Button Save clicked");
            var parameter = JSON.stringify(vm.currentInf);
            $http.post('api/Passwords', parameter).then(function successCallback(response) {
                vm.diary = response.data;
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
        }

        function del(row) {
            console.log("delete");
            $http({
                method: 'DELETE',
                url: 'api/Passwords/' + row.index
            }).then(function successCallback(response) {
                vm.diary = response.data;
                console.log(response.data);
            }, function errorCallback(response) {
                console.log("error delete " + responce);
            });
        }

        function init() {
            $http({
                method: 'GET',
                url: 'api/Passwords'
            }).then(function successCallback(response) {
                vm.diary = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                vm.diary = [];
            });
        }

        function add() {
            console.log("Button add clicked");
            vm.currentInf = {
                index: vm.diary.length
                , site: ''
                , login: ''
                , pass: ''
            };
        }

        function edit(row) {
            console.log("Row was clicked", row);
            vm.currentInf = angular.copy(row);
        }

        function sort(fieldName) {
            if (vm.sortField === fieldName) {
                vm.reverse = !vm.reverse;
            } else {
                vm.sortField = fieldName;
                vm.reverse = false;
            }
        }
        
    }
})();