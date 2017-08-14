//add new item controller
appModule.controller('addCtrl',function($scope,todoArray){
	$scope.todoInput = "";
	//add item
	$scope.todoAdd = function() {
			var id = todoArray.incrementId();
			todoArray.addItem({todoText:$scope.todoInput, done:false, id:'list'+ id, idNo: id});
			$scope.todoInput = "";

	};
});

//add new item component
appModule.component('addItemComponent',{
  templateUrl: 'app/templates/addItem.html',
controller: 'addCtrl'
});
