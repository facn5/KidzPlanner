var todoFunctions = {

  generateId: (function() {
    var idCounter = 0;
    function incrementCounter() {
      return (idCounter += 1);
    }
    return incrementCounter;
  })(),

  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    let newArr = this.cloneArrayOfObjects(todos);
    newTodo["id"] = this.generateId();
    newArr.push(newTodo);
    return newArr;
  },
  deleteTodo: function(todos, idToDelete) {
    var newtodos = todoFunctions.cloneArrayOfObjects(todos);
    return newtodos.filter(function(obj) {
      if (obj.id !== idToDelete) {
        return true;
      }
      return false;
    })
  },

  markTodo: function(todos, idToMark) {
    let result = todoFunctions.cloneArrayOfObjects(todos)
    let sorted = result.map(function(x) {
      if (x.id === idToMark) {
        x.done = !x.done;
      }
      return x;
    })
    return sorted
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
