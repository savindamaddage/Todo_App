//todo list controller
appModule.controller('todoListCtrl',function($scope){
	$scope.todoList = list;

	//remove list item
	$scope.remove = function(id) {
			var oldList = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldList, function(x) {
					if (x.id!=id) $scope.todoList.push(x);
			});
			list = $scope.todoList;
			localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
	};

	$scope.mark = function() {
			list = $scope.todoList;
			localStorage.setItem("todo_list", JSON.stringify($scope.todoList)); //reset loacal storage
	};

	//remove selected items
	$scope.removeMaked = function() {
			var oldList = list;
			list = [];
			angular.forEach(oldList, function(x) {
					if (!x.done) list.push(x);
			});
			$scope.todoList = list;
			localStorage.setItem("todo_list", JSON.stringify(list)); //reset loacal storage
	};

});

//todo list component
appModule.component('todoListComponent',{
  templateUrl: 'app/templates/todoList.html',
	controller: 'todoListCtrl'
});
