(function() {

    var moduleId = "noteBookCtrl";
    angular.module("ToDo").controller(moduleId, [noteBookCtrl]);

    function noteBookCtrl() {

        var vm = this;
       
        vm.diary = [];
        vm.save = save;
        vm.currentInf = null;
        vm.add = add;
    

        init();

        function save() {
            console.log("Button Save clicked");
            vm.diary += vm.currentInf;
            
        }
        function init() {
            vm.diary = [
                { site: 'vk', login: 'mylogin', pass: 'mypass' },
                { site: 'inst', login: 'login', pass: 'pass' },
            ];
        }
         function add() {
            console.log("Button add clicked");
            vm.currentInf = { site: '', login: '', pass: '' };
        }
         
}})();
