var test = require('tape');
var logic = require('./logic');




// test('Testing addToDo function', function(t) {
//   console.log(newTodo);
//   console.log(todos);
//   var acc = newTodo;
//   var expected = {
//     description: "just testing",
//     done: true
//   }
//   t.deepEqual(acc,expected,"msg");
//   t.end();
// });

// test('Testing addToDo2 function', function(t) {
//   var todos = [];
//   var newTodo = {
//     description: "just testing",
//     done: true
//   }
//   var acc = logic.addTodo([], newTodo);
//   var expected = [newTodo];
//   t.deepEqual(acc, expected, "test fails");
//   t.end();
// })

test('Testing deleteTodo if it delets a certain ID function' , function(t) {

  var acc = logic.deleteTodo([{id: 7},{id: 1},{id :8}],1);
  var expected = [{id: 7},{id :8}];
  t.deepEqual(acc, expected, "testing array.filter");
  t.end();
})

test('Testing deleteTodo Keep the input argument unchanged' , function(t) {
  var todos=[{id:0,disc:"wake up every mor"},{id:1,disc:"Hi"}]
  logic.deleteTodo(todos, 0)
  var acc=todos
  var expected =[{id:0,disc:"wake up every mor"},{id:1,disc:"Hi"}];
  t.deepEqual(acc, expected, "testing cloneArrayOfObjects getting new copy of arry");
  t.end();
})
