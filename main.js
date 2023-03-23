//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
//const appID = "app";
//const headingText = "To do. To done. ✅";

// Variables
const todos = [];

const form = document.querySelector(".form1");
const todoTextFromForm = document.querySelector("#todo-item");
const todoList = document.querySelector(".todolist1");

//reccomended 

// Functions
function drawToDoList()
{
  while(todoList.firstChild)
  {
    todoList.removeChild(todoList.firstChild)
  }
  
  for (let i = 0; i < todos.length; i++)
  {
    console.log(todos[i]);

    const listItem = document.createElement("li");
    listItem.textContent = todos[i];

    const todoButton = document.createElement("button");
    todoButton.textContent = "Delete"
    todoButton.classList.add("todoDeleteButton");
    
    todoButton.dataset.index = i;

    todoButton.addEventListener("click" , deleteTo);
    todoList.appendChild(listItem);
    listItem.appendChild(todoButton);

  }

}

function deleteTodo(event)
{
  console.log("Delete button index", event.target.dataset.imdex);

  toDeleteIndex
  todod.splice();
}
function addTodo(event) 
{
  event.preventDefault();
  console.log("hit submit");
  todoTextFromForm.value;
  todos.push(todoTextFromForm.value);
  console.log(todos)
  form.reset();
}


console.log(todoTextFromForm.value)





document.addEventListener("submit" , addTodo)





form.addEventListener("submit" , addTodo)









// DOM Elements
let appContainer = document.getElementById(appID);



// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
