

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-description")
  const submitButton = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")  

  submitButton.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskText = taskInput.value;
    console.log(taskText);

    const listTask = document.createElement("li");
    listTask.textContent = taskText;
    taskList.appendChild(listTask);
    taskInput.value = "";
  })
});
