angular.module("todoApp", [])//List starts
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Go to school", done: false },
    { name: "Eat lunch", done: false },
    { name: "Do laundry", done: false },
    { name: "Buy materials for project", done: false }
  ]

//Adds List
  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };

//Removes List
  todoList.remove = function() {
    console.log("removed function fired");
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  //Counts List
  todoList.remaining = function() {
    var notCompletedCount = 0;
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done ? 0 : 1;
    })

    return notCompletedCount
  }


}); // end TodoListController