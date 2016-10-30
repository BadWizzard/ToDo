(function() {

    var moduleId = "TodoCtrl";
    angular.module("ToDo").controller(moduleId, [todoCtrl]);

    function dietCtrl() {

        var td = this;

        td.rows = [];
        td.import = [];

        init();

        function init() {
            td.import = [{
                text: 'Очень важно',
                value: 1
            }, {
                text: 'Важно',
                value: 2
            }, {
                text: 'Не важно',
                value: 3
            }];

            td.rows = [{
                task: 'Поспать',
                importance: td.import[0].value,
                date: '2015-08-08 7:30',
            }, {
                task: 'Покушать',
                importance: td.import[1].value,
                date: '2015-08-18 15:30',
            }];
        }
    }

})();