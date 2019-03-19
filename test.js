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

test('Testing addToDo2 function', function(t) {
  var todos = [];
  var newTodo = {
    description: "just testing",
    done: true
  }
  var acc = logic.addTodo([], newTodo);
  var expected = [newTodo];
  t.deepEqual(acc, expected, "test fails");
  t.end();
})
