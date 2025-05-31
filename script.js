let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    const taskText = document.createElement("span");
    taskText.className = task.completed ? "completed" : "";
    taskText.innerText = `${task.text} (${task.time})`;
    taskText.onclick = () => toggleTask(index);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    taskElement.appendChild(taskText);
    taskElement.appendChild(editBtn);
    taskElement.appendChild(deleteBtn);
    taskList.appendChild(taskElement);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  if (taskInput.value.trim() === "") return;
  tasks.push({ text: taskInput.value, time: taskTime.value, completed: false });
  taskInput.value = "";
  taskTime.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index].text);
  const newTime = prompt("Edit the time:", tasks[index].time);
  if (newTask !== null) tasks[index].text = newTask;
  if (newTime !== null) tasks[index].time = newTime;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
