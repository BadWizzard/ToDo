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
        
        init();

        function save() {
            console.log("Button Save clicked");
            if (vm.currentInf.index === vm.diary.length) {
                vm.diary.push(vm.currentInf);
            } else {
                vm.diary[vm.currentInf.index] = vm.currentInf;
            }
        }

        function init() {

            /*// Simple GET request example:
            $http({
                method: 'GET'
                , url: '/someUrl'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                vm.diary = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });*/
           
            vm.diary = [
                {
                    index: 0
                    , site: 'vk'
                    , login: 'mylogin'
                    , pass: '*****'
                }
                , {
                    index: 1
                    , site: 'inst'
                    , login: '1login'
                    , pass: '****'
                    
                }
            , ];
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