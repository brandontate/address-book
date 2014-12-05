;(function() {
    "use strict";

    var app = angular.module("AddressApp",[]);
    app.controller("AddressBookController", function() {
        var vm = this;

        vm.contacts = [
          {
              name: "Hank",
              email: "blahblah@ymail.com",
              phone: 9876543210,
              address: "Know Your Role Blvd "
          },
          {
              name: "Cookie Monster",
              email: "lovecookies@gmail.com",
              phone: 1234567890,
              address: "Sesame Street"
          },
          {
              name: "Clifford",
              email: "bigreddog@aol.com",
              phone: 127361239,
              address: "Too big for an address"
          },
          {
              name: "Hank",
              email: "blahblah@ymail.com",
              phone: 9876543210,
              address: "Know Your Role Blvd "
          },
          {
              name: "Cookie Monster",
              email: "lovecookies@gmail.com",
              phone: 1234567890,
              address: "Sesame Street"
          },
          {
              name: "Clifford",
              email: "bigreddog@aol.com",
              phone: 127361239,
              address: "Too big for an address"
          }

        ];

        vm.addContact = function() {
            vm.contacts.push(vm.newContact);
            vm.newContact = null;
        };
        
        vm.removeContact = function(contact) {
            var index = vm.contacts.indexOf(contact);
            vm.contacts.splice(index,1);
        };

    });
})();
