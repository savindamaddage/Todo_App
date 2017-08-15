describe('Unit testing -> ', function(){
  beforeEach(module('appModule'));

  describe('Remove item -> ', function(){
    var $scope, ctrl, mocklTodoArray;

    beforeEach(inject(function($controller, $rootScope, todoArray){
      $scope = $rootScope.$new();
      ctrl = $controller('listItemCtrl',{$scope: $scope, todoArray: todoArray});
      mocklTodoArray =  todoArray;
    }));

    it('Todo list should be defined -> ', function(){
      expect($scope.$parent.todoList).toBeDefined();
    });

    it('Item should be removed -> ', function(){
      expect($scope.$parent.todoList.length).toBe(0);
      $scope.$parent.todoList.push({todoText:"Test", done:false, id:'list5', idNo: 7});
      $scope.$parent.todoList.push({todoText:"Test", done:true, id:'list6', idNo: 8});
      expect($scope.$parent.todoList.length).toBe(2);
      $scope.remove(7);
      expect($scope.$parent.todoList.length).toBe(1);
    });
  });
});
