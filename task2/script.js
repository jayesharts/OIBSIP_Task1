document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const dateAdded = new Date();
    const taskItem = {
        id: Date.now(),
        value: taskValue,
        completed: false,
        dateAdded: dateAdded.toLocaleString(),
    };

    renderTask(taskItem);
    taskInput.value = "";
}

function renderTask(task) {
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    const li = document.createElement('li');
    li.id = task.id;
    li.innerHTML = `
        ${task.value} <span>${task.dateAdded}</span>
        <button class="complete" onclick="completeTask(${task.id})">Complete</button>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
    `;
    
    pendingList.appendChild(li);
}

function completeTask(taskId) {
    const taskItem = document.getElementById(taskId);
    const completedList = document.getElementById('completedList');

    // Move the task to the completed list
    const completedTask = document.createElement('li');
    completedTask.innerHTML = `
        ${taskItem.firstChild.nodeValue} <span>${new Date().toLocaleString()}</span>
        <button class="delete" onclick="deleteTask(${taskId})">Delete</button>
    `;

    completedList.appendChild(completedTask);
    taskItem.remove();
}

function editTask(taskId) {
    const taskItem = document.getElementById(taskId);
    const taskValue = taskItem.firstChild.nodeValue.trim();
    const newTaskValue = prompt("Edit task:", taskValue);

    if (newTaskValue !== null && newTaskValue.trim() !== "") {
        taskItem.firstChild.nodeValue = newTaskValue + " ";
    }
}

function deleteTask(taskId) {
    const taskItem = document.getElementById(taskId);
    if (taskItem) {
        taskItem.remove();
    } else {
        const completedItem = [...document.getElementById('completedList').children].find(li => li.firstChild.nodeValue.includes(taskId));
        if (completedItem) {
            completedItem.remove();
        }
    }
}
