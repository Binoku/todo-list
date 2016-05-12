angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Clean my room" },
    { name: "Walk with the dog" },
    { name: "Do laundry" },
    { name: "Buy groceries" }
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };


}); // end TodoListController