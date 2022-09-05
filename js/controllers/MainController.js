app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.todo = {
      title: "Things I need to do.",
      list: ["Clean my room", "Go store", "Yooo"],
    };
    $scope.books = {
      title: "Things I need to do.",
      list: ["Social", "Science", "English"],
    };
    $scope.addItem = function (itemList, item) {
      itemList.push(item);
    };
  },
]);
