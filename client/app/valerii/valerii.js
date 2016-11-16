(function() {

    var moduleId = "TodoCtrl";
    angular.module("ToDo").controller(moduleId, [todoCtrl]);

    function todoCtrl() {

        var td = this;

        td.rows = [];
        td.import = [];
        td.filterByTask = "";
        td.sortField = "";
        td.reverse = false;
        td.save = save;
        td.sort = sort;
        td.add = add;
        td.edit = edit;
        td.delete = delet;
        td.currentInf = null;
        td.popup = "";

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
                index:0,
                task: 'Поспать',
                importance: td.import[0].text,
                date: '2015-08-08 7:30',
            }, {
                index:1,
                task: 'Покушать',
                importance: td.import[1].text,
                date: '2015-08-18 15:30',
            }];
        }

        function save() {
            console.log("Button Save clicked");
            if(td.currentInf.index === td.rows.length) {
               td.rows.push(td.currentInf);
            } else {
                td.rows[td.currentInf.index] = td.currentInf;
            } 
        }

        function add () {
            console.log('add');
            td.popup = "ДОБАВИТЬ";
            td.currentInf = { index:td.rows.length, task: '', importance: '', date: '' };
        }

        function edit(row) {
            console.log("Row was clicked", row);
            td.popup = "ИЗМЕНИТЬ";
            td.currentInf = angular.copy(row);
        }

        function delet(row) {
            console.log("delete");
            for(var i = 0; i < td.rows.length; i++) {
                if(row.index == td.rows[i].index) {
                    delete td.rows[i];
                }
            }
        }
        function sort(fieldName) {
            if (td.sortField === fieldName) {
                td.reverse = !td.reverse;
            } else {
                td.sortField = fieldName;
                td.reverse = false;
            }
        }
    }

})();