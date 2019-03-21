(function() {
  // This is the dom node where we will keep our todo
  var todoContainer = document.getElementById('todo-container');
  var completedContainer = document.getElementById('completed-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      description: 'first todo',
      done: true,
      id: -3
    },
    {
      id: -2,
      description: 'second todo',
      done: false
    },
    {
      id: -1,
      description: 'third todo',
      done: false
    },
  ]; // This is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    let todoNode = document.createElement('li');

    let todoSpan = document.createElement('span');

    todoSpan.textContent = todo.description;

    todoNode.appendChild(todoSpan);

    // this adds the delete button
    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = "Delete";
    todoNode.appendChild(deleteButtonNode);

    deleteButtonNode.addEventListener('click', function(event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.classList.add("btn");
    todoNode.appendChild(deleteButtonNode);

    let doneButtonNode = document.createElement('button');
    doneButtonNode.textContent = "Done";
    todoNode.appendChild(doneButtonNode);

    doneButtonNode.addEventListener('click', function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    doneButtonNode.classList.add("btn");

    todoNode.appendChild(doneButtonNode);
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();

      let descriptionEle = document.getElementById("description"); // event.target ....
      let description = descriptionEle.value;

      if (description) {
        let newTodo = {
          description: description,
          done: false
        }
        state = todoFunctions.addTodo(state, newTodo);
        descriptionEle.value = "";
        update(state);
      }
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {

    var todoListNode = document.createElement('ul');
    var completedListNode = document.createElement('ul');

    state.forEach(function(todo) {
      if (todo.done)
        completedListNode.insertBefore(createTodoNode(todo), completedListNode.childNodes[0]);
      else {
        todoListNode.appendChild(createTodoNode(todo));
      }
    });

    todoContainer.replaceChild(todoListNode, todoContainer.lastChild);
    completedContainer.replaceChild(completedListNode, completedContainer.lastChild);
  };

  if (todoContainer) renderState(state);
})();
