(function() {

    var moduleId = "TodoCtrl";
    angular.module("ToDo").controller(moduleId, ['$http', todoCtrl]);

    function todoCtrl($http) {

        var td = this;

        td.rows = [];
        td.import = [];
        td.filterByTask = "";
        td.sortField = "";
        td.popup = "";
        td.modalWindow = "#myPop";
        td.currentInf = null;
        td.reverse = false;
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
            $http({
                method: 'GET',
                url: '/api/Todo'
            }).then(function successCallback(response) {
                td.rows = response.data;
                for (var i = 0; i < td.rows.length; i++) {
                    td.rows[i].date = new Date(td.rows[i].date);
                }
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                td.rows = [];
            });
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
            var parameter = JSON.stringify(td.currentInf);
            $http.post('/api/Todo/', parameter).then(function successCallback(response) {
                td.rows = response.data;
                for (var i = 0; i < td.rows.length; i++) {
                    td.rows[i].date = new Date(td.rows[i].date);
                }
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
        }
        function validation(task) {
            td.butCheck = (task.length != 0);
        }

        function add() {
            console.log('add');
            td.butCheck = false;
            td.popup = "ДОБАВИТЬ";
            td.currentInf = { id: td.rows.length, task: '', importance: '', date: '' };
        }

        function edit(row) {
            console.log("Row was clicked", row);
            td.popup = "ИЗМЕНИТЬ";
            td.currentInf = angular.copy(row);
        }

        function delet(row) {
            console.log("delete");
            deleteId(row.id);
        }

        function deletRows() {
            console.log("delete rows");
            var checkedId = [];
            td.rows.forEach(function (item, i, arr) {
                if (item.check) {
                    deleteId(item.id);
                }
            });
            for (var i = 0; i < td.rows.length; i++) {
                td.rows[i].date = new Date(td.rows[i].date);
            }
            
        }
        
        function deleteId(id) {
            $http({
                method: 'DELETE',
                url: '/api/Todo/' + id
            }).then(function successCallback(response) {
                td.rows = response.data;
                for (var i = 0; i < td.rows.length; i++) {
                    td.rows[i].date = new Date(td.rows[i].date);
                }
                console.log(response.data);
            }, function errorCallback(response) {
                console.log("error delete " + responce);
            });
        }

        function sort(fieldName) {
            td.reverse = !td.reverse;
            td.sortField = fieldName;
        }
    }

})();
