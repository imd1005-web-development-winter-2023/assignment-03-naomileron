window.addEventListener('load', () =>
{
  const form = document.querySelector("#add-list-item");
  const input = document.querySelector("#add-todo-item");
  const list_el = document.querySelector("#tasks");
  console.log(form);

  form.addEventListener('submit', (event) => 
  {
    event.preventDefault();
    console.log("hit submit");

    const task = input.value;

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    task_content_element.innerText = "I am a task";
    

    task_element.appendChild(task_content_element);

    list_element.appendChild(task_element);

  })
})
