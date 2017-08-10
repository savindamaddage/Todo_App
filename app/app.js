var appModule=angular.module('appModule',[]);

var list = [];
var i = 0;

//get array from local storage
//check whether loacl storage is available
if(JSON.parse(localStorage.getItem("todo_list")) && JSON.parse(localStorage.getItem("todo_list")).length>0){
		list = JSON.parse(localStorage.getItem("todo_list"));
		i = list[list.length-1].idNo;
}

// app component
appModule.component('app',{
	templateUrl: 'app/templates/app.html',
});
