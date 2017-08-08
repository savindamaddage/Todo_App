var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    //get array from local storage
    $scope.todoList = JSON.parse(localStorage.getItem("todo_list"));

    var i = $scope.todoList[$scope.todoList.length-1].idNo;

    //add item
    $scope.todoAdd = function() {
        i++;
        $scope.todoList.push({todoText:$scope.todoInput, done:false, id:'list'+ i, idNo: i});
        $scope.todoInput = "";
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
    };

    //remove list item
    $scope.remove = function(id) {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (x.id!=id) $scope.todoList.push(x);
        });
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
    };

    //remove selected items
    $scope.removeMaked = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
    };

    $scope.mark = function() {
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
    };
});