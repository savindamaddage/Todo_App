//add new item controller
appModule.controller('addCtrl',function($scope){
	//add item
	$scope.todoAdd = function() {
			i++;
			list.push({todoText:$scope.todoInput, done:false, id:'list'+ i, idNo: i});
			$scope.todoInput = "";
			localStorage.setItem("todo_list", JSON.stringify(list)); //reset loacal storage
	};
});

//add new item component
appModule.component('addItemComponent',{
  templateUrl: 'app/templates/addItem.html',
controller: 'addCtrl'
});
