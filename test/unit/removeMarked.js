describe('Unit testing -> ', function(){
  beforeEach(module('appModule'));

  describe('Remove marked items -> ', function(){
    var scope, ctrl, mocklTodoArray;

    beforeEach(inject(function($controller, $rootScope, todoArray){
      scope = $rootScope.$new();
      ctrl = $controller('todoListCtrl',{$scope: scope, todoArray: todoArray});
      mocklTodoArray =  todoArray;

    }));

    it('should add item to list', function(){

      expect(scope.todoList.length).toBe(0);
      scope.todoList.push({todoText:"Test", done:false, id:'list5', idNo: 5});

      scope.todoList.push({todoText:"Test", done:true, id:'list6', idNo: 6});
      expect(scope.todoList.length).toBe(2);
      scope.removeMaked();
      expect(scope.todoList.length).toBe(2);

    });
  });
});
