(function() {
    var moduleId = "ContactsCtrl";
    angular.module("ToDo").controller(moduleId, [contactsCtrl]);

    function contactsCtrl() {
        var cc = this;

        cc.contacts = [];
        cc.save = saveData;
        cc.add = add;
        cc.edit = edit;
        cc.delete = delet;
        cc.sort = sort;
        cc.valid = validation;
        cc.isEdit = false;
        cc.modCheck = [];
        cc.buttonText = '';
        cc.sortBy = '';
        cc.filterByFirstname = '';
        cc.filterByLastname = '';
        cc.rowContact = {};

        init();

        function saveData() {
            console.log("save");
            if (cc.isEdit == false) {
                cc.contacts.push(cc.rowContact);
            } else {
                cc.contacts[cc.rowContact.index - 1] = cc.rowContact;
            }
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
            cc.isEdit = true;
            cc.buttonText = "Редактировать";
        }

        function delet(row) {
            console.log("delete");
            for (var i = 0; i < cc.contacts.length; i++) {
                if (row.index == cc.contacts[i].index) {
                    cc.contacts.splice(i, 1);
                }
            }
        }

        function init() {
            cc.contacts = [{
                index: 1,
                lastname: "tkachuk",
                firstname: "irina",
                tel: "0994175294",
                email: "irinatkachuk23@gmail.com"
            }, {
                index: 2,
                lastname: "Oderii",
                firstname: "Valerii",
                tel: "09941112111",
                email: "valerii@gmail.com"
            }];
            for (var i = 0; i < 4; i++) {
                cc.modCheck[i] = false;
            }

        }
    }
})();
