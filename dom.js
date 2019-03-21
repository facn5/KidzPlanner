// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

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
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    let todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    let todoSpan = document.createElement('span');
    console.log(todo.description);

    todoSpan.textContent = todo.description;

    todoNode.appendChild(todoSpan);

    // this adds the delete button
    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = "Delete"; // Insert text
    todoNode.appendChild(deleteButtonNode);

    deleteButtonNode.addEventListener('click', function(event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.classList.add("btn");
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // this adds the delete button
    let doneButtonNode = document.createElement('button');
    doneButtonNode.textContent = "Done"; // Insert text
    todoNode.appendChild(doneButtonNode);

    doneButtonNode.addEventListener('click', function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });


    // add classes for css
    doneButtonNode.classList.add("btn");

    todoNode.appendChild(doneButtonNode);
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

      if (description) {
        let newTodo = {
          description: description,
          done: false
        }
        state = todoFunctions.addTodo(state, newTodo);

        descriptionEle.value = "";
        // ?? change this!

        update(state);

      }
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    console.log(state);
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {

    var todoListNode = document.createElement('ul');
    var completedListNode = document.createElement('ul');

    state.forEach(function(todo) {
      if (todo.done)
        completedListNode.insertBefore(createTodoNode(todo),completedListNode.childNodes[0]);
      else {
        todoListNode.appendChild(createTodoNode(todo));
      }
    });

    // you may want to add a class for css
    todoContainer.replaceChild(todoListNode, todoContainer.lastChild);
    completedContainer.replaceChild(completedListNode, completedContainer.lastChild);
  };

  if (todoContainer) renderState(state);
})();
