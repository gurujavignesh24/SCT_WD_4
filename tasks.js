let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = `task ${task.priority}`;

    const taskText = document.createElement("span");
    taskText.className = task.completed ? "completed" : "";
    taskText.innerText = `${task.text} (${task.time}) [${task.priority}]`;
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
  const taskPriority = document.getElementById("taskPriority");

  if (taskInput.value.trim() === "") return;

  tasks.push({
    text: taskInput.value,
    time: taskTime.value,
    priority: taskPriority.value,
    completed: false
  });

  taskInput.value = "";
  taskTime.value = "";
  taskPriority.value = "medium";

  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  const newTime = prompt("Edit time:", tasks[index].time);
  const newPriority = prompt("Edit priority (low, medium, high):", tasks[index].priority);

  if (newText !== null) tasks[index].text = newText;
  if (newTime !== null) tasks[index].time = newTime;
  if (newPriority !== null) tasks[index].priority = newPriority;

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
