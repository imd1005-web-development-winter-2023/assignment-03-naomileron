window.addEventListener('load', () =>
{
  const form = document.querySelector("#add-list-item");
  const input = document.querySelector("#todo-input");
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
    task_content_element.innerText = input.value;
    

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.type = task;
    task_input_element.setAttribute("readonly" , "readonly");

    task_content_element.appendChild(task_input_element);

    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerHTML = "Edit";

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerHTML = "Done/Delete";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);

    task_element.appendChild(task_actions_element);

    input.value = "";

    task_edit_element.addEventListener('click', () => {
      if(task_edit_element.innerText.toLowerCase() === "edit" )
      {
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
        task_edit_element.innerText = "Save";
      }
      else
      {
        console.log("Save");
        task_input_element.setAttribute("readonly" , "readonly");
        task_edit_element.innerText = "Edit";
      }
    });

    task_delete_element.addEventListener('click' , () => {
      list_element.removeChild(task_element);
    });

    list_element.appendChild(task_element);

  });


});
