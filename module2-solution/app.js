(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  // Controller for 'To Buy' list
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyItem = function (item) {
      ShoppingListCheckOffService.buyItem(item);
    };
  }

  // Controller for 'Already Bought' list
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtCtrl = this;
    alreadyBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  // Service for managing both lists
  function ShoppingListCheckOffService() {
    var service = this;

    // List of items to buy
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "soda", quantity: 2 },
      { name: "water bottles", quantity: 8 },
      { name: "bread", quantity: 3 }
    ];

    // List of already bought items
    var boughtItems = [];

    // Method to get the "To Buy" list
    service.getToBuyItems = function () {
      return toBuyItems;
    };

    // Method to get the "Already Bought" list
    service.getBoughtItems = function () {
      return boughtItems;
    };

    // Method to move item from "To Buy" to "Already Bought"
    service.buyItem = function (item) {
      var index = toBuyItems.indexOf(item);
      if (index !== -1) {
        toBuyItems.splice(index, 1); // Remove from "To Buy"
        boughtItems.push(item); // Add to "Already Bought"
      }
    };
  }

})();
