appModule.controller('listItemCtrl', function($scope,todoArray){
	// remove item
	$scope.remove = function(id){
			var oldList = $scope.$parent.todoList;
			$scope.$parent.todoList = [];
			angular.forEach(oldList, function(x) {
					if (x.idNo!=id) {
            $scope.$parent.todoList.push(x);
          }
			});
			todoArray.setList($scope.$parent.todoList);
	};
	// mark as completed
	$scope.mark = function() {
			todoArray.setList($scope.$parent.todoList);
	};
});

//list item componet
appModule.component('listItemComponent',{
	templateUrl: 'app/templates/listItem.html',
	controller: 'listItemCtrl'
});
