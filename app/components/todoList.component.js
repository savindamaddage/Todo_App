//todo list controller
appModule.controller('todoListCtrl',function($scope,todoArray){
	$scope.todoList = todoArray.getList;

	//remove selected items
	$scope.removeMaked = function() {
			var oldList = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldList, function(x) {
					if (!x.done) $scope.todoList.push(x);
			});
			todoArray.setList($scope.todoList);
	};

});

//todo list component
appModule.component('todoListComponent',{
  templateUrl: 'app/templates/todoList.html',
	controller: 'todoListCtrl'
});
