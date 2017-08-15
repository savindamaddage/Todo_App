describe('Unit testing -> ', function(){
  beforeEach(module('appModule'));

  describe('Add new item -> ', function(){
    var scope, ctrl, mocklTodoArray;

    beforeEach(inject(function($controller, $rootScope, todoArray){
      scope = $rootScope.$new();
      ctrl = $controller('addCtrl',{$scope: scope, todoArray: todoArray});
      mocklTodoArray =  todoArray;
      spyOn(mocklTodoArray, "addItem");
      spyOn(mocklTodoArray, "incrementId");
      spyOn(mocklTodoArray, "getList");
      spyOn(mocklTodoArray, "getId");
    }));

    it('should be initialize the input', function(){
      expect(scope.todoInput).toBeDefined();
    });

    it('should add item to list', function(){
      scope.todoInput = "Complete unit testing before lunch";
      scope.todoAdd();

      expect(scope.todoInput).toBe("");
      expect(mocklTodoArray.addItem).toHaveBeenCalled();
      expect(mocklTodoArray.incrementId).toHaveBeenCalled();
      expect(mocklTodoArray.getList.length).toBe(0);
      //expect(mocklTodoArray.getId).toBeNull();
      // expect(_todoArray_.length).toBe(0);
      //expect(scope.todoAdd()).toHaveBeenCalledWith({todoText:"Complete unit testing before lunch", done:false, id:'list1', idNo: 1})

    });
  });
});
