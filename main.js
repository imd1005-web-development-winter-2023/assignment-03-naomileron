window.addEventListener('load', () =>
{
  const form = document.querySelector("#add-list-item");
  const input = document.querySelector("#new-todo-submission");
  const list_element = document.querySelector("#tasks");
  console.log(form);

  form.addEventListener('submit', (event) => 
  {
    event.preventDefault();
    console.log("hit submit");

    const task = input.value;
    console.log(input);

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    task_content_element.innerText = task;
    

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.type = task;
    task_input_element.setAttribute("readonly" , "readonly");

    task_content_element.appendChild(task_input_element);

    const_actions_element = document.createElement("div");

    list_element.appendChild(task_element);

  })
})
