(function() {
    var moduleId = "ContactsCtrl";
    angular.module("ToDo").controller(moduleId, ['$http', contactsCtrl]);

    function contactsCtrl($http) {
        var cc = this;

        cc.contacts = [];
        cc.save = saveData;
        cc.add = add;
        cc.edit = edit;
        cc.delete = delet;
        cc.sort = sort;
        cc.valid = validation;
        cc.modCheck = [];
        cc.buttonText = '';
        cc.sortBy = '';
        cc.filterByFirstname = '';
        cc.filterByLastname = '';
        cc.rowContact = {};

        init();

        function saveData() {
            console.log("save");
            var parameter = JSON.stringify(cc.rowContact);
            $http.post('/api/Contacts', parameter).then(function successCallback(response) {
                cc.contacts = response.data;
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
        }

        function sort(sortBy) {
            cc.sortBy = sortBy;
        }

        function add() {
            console.log("add");
            cc.rowContact = {
                index: cc.contacts.length + 1,
                lastname: "",
                firstname: "",
                tel: "",
                email: ""
            };
            cc.isEdit = false;
            cc.buttonText = "Добавить";
        }

        function validation(contact) {
            cc.modCheck[0] = (contact.firstname.length != 0);
            cc.modCheck[1] = (contact.lastname.length != 0);


            var tel = "([0-9]{3})?[0-9]{10}";
            if (contact.tel != undefined) {
                cc.modCheck[2] = (contact.tel.match(tel));
            }
            cc.modCheck[3] = (contact.email != undefined && contact.email != "");
        }

        function edit(row) {
            console.log("edit");
            cc.rowContact = angular.copy(row);
            cc.buttonText = "Редактировать";
        }

        function delet(row) {
            console.log("delete");
            $http({
                method: 'DELETE',
                url: '/api/Contacts/' + row.index
            }).then(function successCallback(response) {
                cc.contacts = response.data;
            }, function errorCallback(response) {
                console.log("error delete " + responce);
            });
        }

        function init() {
            $http({
                method: 'GET',
                url: '/api/Contacts'
            }).then(function successCallback(response) {
                cc.contacts = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                cc.contacts = [];
            });
            for (var i = 0; i < 4; i++) {
                cc.modCheck[i] = false;
            }

        }
    }
})();
