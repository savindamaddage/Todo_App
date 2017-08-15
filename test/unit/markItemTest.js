describe('Unit testing -> ', function(){
  beforeEach(module('appModule'));

  describe('Mark item -> ', function(){
    var $scope, ctrl, mocklTodoArray;

    beforeEach(inject(function($controller, $rootScope, todoArray){
      $scope = $rootScope.$new();
      ctrl = $controller('listItemCtrl',{$scope: $scope, todoArray: todoArray});
      mocklTodoArray =  todoArray;

    }));

    it('Todo list should be defined -> ', function(){
      expect($scope.$parent.todoList).toBeDefined();
    });

    it('Should be marked -> ', function(){

      $scope.$parent.todoList.push({todoText:"Test", done:false, id:'list5', idNo: 7});
      $scope.$parent.todoList.push({todoText:"Test", done:false, id:'list6', idNo: 8});
      $scope.$parent.todoList[0].done = true;
      $scope.mark();

      expect(mocklTodoArray.getList.todoList[0].done).toBe(true);

    });

  });
});
