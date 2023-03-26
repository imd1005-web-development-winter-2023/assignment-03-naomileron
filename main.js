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

    const task_element = document.createElement("div");
    task_element.classList.add("")
  })
})
