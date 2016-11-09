(function() {

    var moduleId = "noteBookCtrl";
    angular.module("ToDo").controller(moduleId, [noteBookCtrl]);

    function noteBookCtrl() {

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
            if(vm.currentInf.index === vm.diary.length) {
               vm.diary.push(vm.currentInf);
            } else {
                vm.diary[vm.currentInf.index] = vm.currentInf;
            } 
        }
        function init() {
            vm.diary = [
                { index:0, site: 'vk', login: 'mylogin', pass: 'mypass' },
                {  index:1, site: 'inst', login: '1login', pass: '1pass' },
            ];
        }
         function add() {
            console.log("Button add clicked");
            vm.currentInf = { index:vm.diary.length, site: '', login: '', pass: '' };
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
         
}})();
