interface Task {
  id: number;
  name: string;
}

function createTask(name: string): Task {
  return { id: Date.now(), name};
}

function addTaskToList(task: Task): void {
  const taskList = document.getElementById('taskList');
  if (taskList) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;
    taskList.appendChild(taskItem);
  }
}

function AddButtonHandler(): void {
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    const newTask = createTask(taskName);
    addTaskToList(newTask);
    taskInput.value = '';
  }
}

const addTaskButton = document.getElementById('addTaskButton');
addTaskButton?.addEventListener('click', AddButtonHandler);
