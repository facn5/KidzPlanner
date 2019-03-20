var test = require('tape');
var logic = require('./logic');

test('Testing addTodo with empty array', function(t) {
  var todos = [];
  var newTodo = {
    description: "just testing",
    done: true
  }
  var acc = logic.addTodo([], newTodo);
  var expected = [newTodo];
  t.deepEqual(expected, expected, "input value not changed");
  t.deepEqual(acc, expected, "expected value reached");
  t.deepEqual(typeof acc[0]["id"],"number", "id value added");
  t.end();
});

test('Testing addTodo with array not empty', function(t) {
  let todo = {
    description: "testing",
    done: false
  };
  let todos = [todo];
  let newTodo = {
    description: "just testing",
    done: true
  }
  let acc = logic.addTodo(todos, newTodo);
  let expected = [todo, newTodo];
  t.deepEqual(expected, expected, "input value not changed");
  t.deepEqual(acc, expected, "expected value reached");
  t.deepEqual(typeof acc[1]["id"],"number", "id value added");
  t.end();
})

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

test('Testing markTodo function', function(t) {
  let preTestItem = [{
    id: 0,
    description: "do my homework",
    done: false
  }, {
    id: "idToMark",
    description: "make my bed",
    done: false
  }];

  let expected = [{
    id: 0,
    description: "do my homework",
    done: false
  }, {
    id: "idToMark",
    description: "make my bed",
    done: true
  }];

  let actual = logic.markTodo(preTestItem, "idToMark");
  console.log(actual)

  t.deepEqual(actual, expected, "Should toggle 'done' value of item with id: idToMark")
  t.end();
});
