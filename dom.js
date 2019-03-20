// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
  // This is the dom node where we will keep our todo
  var todoContainer = document.getElementById('todo-container');
  var completedContainer = document.getElementById('completed-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      id: -3,
      description: 'first todo',
      done:true
    },
    {
      id: -2,
      description: 'second todo',
      done:false
    },
    {
      id: -1,
      description: 'third todo',
      done:false
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    let todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    let todoSpan = document.createElement('span');
    console.log(todo.description);

    todoSpan.innerHTML = todo.description;

    todoNode.appendChild(todoSpan);

    // this adds the delete button
    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerHTML = "CLICK ME"; // Insert text
    todoNode.appendChild(deleteButtonNode);

    deleteButtonNode.addEventListener('click', function(event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      let descriptionEle = document.getElementById("description"); // event.target ....
      let description = descriptionEle.value;
      // hint: todoFunctions.addTodo
      state = todoFunctions.addTodo(state, {
        description
      });

      descriptionEle.value = "";
      // ?? change this!

      update(state);

    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {

    var todoListNode = document.createElement('ul');
    var completedListNode = document.createElement('ul');

    state.forEach(function(todo) {
      if (todo.done)
        completedListNode.appendChild(createTodoNode(todo));
      else {
        todoListNode.appendChild(createTodoNode(todo));
      }
    });

    // you may want to add a class for css
    todoContainer.replaceChild(todoListNode, todoContainer.firstChild);
    completedContainer.replaceChild(completedListNode, completedContainer.firstChild);
  };

  if (todoContainer) renderState(state);
})();
