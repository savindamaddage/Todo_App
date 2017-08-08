var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoList = JSON.parse(localStorage.getItem("todo_list"));

    var i = 0;
    $scope.todoAdd = function() {
        i++;
        $scope.todoList.push({todoText:$scope.todoInput, done:false, id:'list'+ i});
        $scope.todoInput = "";
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList));
    };

    $scope.remove = function(id) {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (x.id!=id) $scope.todoList.push(x);
        });
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList));
    };

    $scope.removeMaked = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList));
    };

    $scope.mark = function() {
        localStorage.setItem("todo_list", JSON.stringify($scope.todoList));
    };
});