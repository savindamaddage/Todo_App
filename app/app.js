var appModule=angular.module('appModule',[]);

appModule.component('app',{
	template: '<h1>test</h1>'
});

appModule.controller('todoCtrl', function($scope) {
    $scope.todoList = [];
    var i = 0;
    //get array from local storage
    //check whether loacl storage is available
    if(JSON.parse(localStorage.getItem("todo_list")) && JSON.parse(localStorage.getItem("todo_list")).length>0){
        $scope.todoList = JSON.parse(localStorage.getItem("todo_list"));
        i = $scope.todoList[$scope.todoList.length-1].idNo;
    }

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
