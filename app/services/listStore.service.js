//storage service
appModule.factory('todoArray', function() {
  //intialize array
	var list1 = [];
	var id = 0;
  //check whether loacl storage is available
	if(JSON.parse(localStorage.getItem("todo_list")) && JSON.parse(localStorage.getItem("todo_list")).length>0){
			list1 = JSON.parse(localStorage.getItem("todo_list"));
			id = list1[list1.length-1].idNo;
	}
    return {
			getList: list1,
			getId: id,
			setList: function(list){
				list1 = list;
				localStorage.setItem("todo_list", JSON.stringify(list1)); //reset loacal storage
			},
			setId: function(x){
				id = x;
			},
			incrementId: function(){
				id = id+1;
				return id;
			},
			addItem: function(item){
				list1.push(item);
				localStorage.setItem("todo_list", JSON.stringify(list1)); //reset loacal storage
			}
	}
});
