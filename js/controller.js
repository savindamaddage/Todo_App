var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];
    var i = 0;
    $scope.todoAdd = function() {
        i++;
        $scope.todoList.push({todoText:$scope.todoInput, done:false, id:'list'+ i});
        $scope.todoInput = "";
    };

    $scope.remove = function(id) {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (x.id!=id) $scope.todoList.push(x);
        });
    };

    $scope.removeMaked = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});