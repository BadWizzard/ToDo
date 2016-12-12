(function() {

    var moduleId = "TodoCtrl";
    angular.module("ToDo").controller(moduleId, [todoCtrl]);

    function todoCtrl() {

        var td = this;

        td.rows = [];
        td.import = [];
        td.filterByTask = "";
        td.sortField = "";
        td.popup = "";
        td.reverse = false;
        td.currentInf = null;
        td.butCheck = false;
        td.check = false;
        td.save = save;
        td.sort = sort;
        td.add = add;
        td.edit = edit;
        td.delete = delet;
        td.deleteRows = deletRows;
        td.valid = validation;

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
                index: 0,
                task: 'Поспать',
                importance: td.import[1].text,
                date: new Date("2016-11-10"),
                check: false
            }, {
                index: 1,
                task: 'Покушать',
                importance: td.import[0].text,
                date: new Date("2015-11-10"),
                check: false
            }];
        }

        function save() {
            console.log("Button Save clicked");
            if (td.currentInf.date.length == 0) {
                td.currentInf.date = new Date();
            }
            if (td.currentInf.importance.length == 0) {
                td.currentInf.importance = td.import[1].text;
            }
            for (var i = 0; i < td.import.length; i++) {
                if (td.currentInf.importance == td.import[i].value) {
                    td.currentInf.importance = td.import[i].text;
                }
            }
            if (td.currentInf.index === td.rows.length) {
                td.rows.push(td.currentInf);
            } else {
                td.rows[td.currentInf.index] = td.currentInf;
            }
        }

        function validation(task) {
            td.butCheck = (task.length != 0);
        }

        function add() {
            console.log('add');
            td.butCheck = false;
            td.popup = "ДОБАВИТЬ";
            console.log(td.popup);
            td.currentInf = { index: td.rows.length, task: '', importance: '', date: '' };
        }

        function edit(row) {
            console.log("Row was clicked", row);
            td.popup = "ИЗМЕНИТЬ";
            td.currentInf = angular.copy(row);
        }

        function delet(row) {
            console.log("delete");
            for (var i = 0; i < td.rows.length; i++) {
                if (row.index == td.rows[i].index) {
                    td.rows.splice(i, 1);
                }
            }
        }

        function deletRows() {
            console.log("delete rows");
            var ck;
            do {
                ck = false;
                for (var i = 0; i < td.rows.length; i++) {
                    if (td.rows[i].check) {
                        ck = true;
                        td.rows.splice(i, 1);
                    }
                }
            } while (ck);
        }

        function sort(fieldName) {
            td.reverse = !td.reverse;
            td.sortField = fieldName;
        }
    }

})();
