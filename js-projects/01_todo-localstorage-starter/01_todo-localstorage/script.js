document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("todo-input");
    let add = document.getElementById("add-task-btn");
    let list = document.getElementById("todo-list")

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => renderTasks(task));

    add.addEventListener('click', () => {
        let textinput = input.value.trim();
        if (textinput === "") {
            return
        }
        const newTask = {
            id: Date.now(),
            text: textinput,
            completed: false,
        }
        tasks.push(newTask)
        saveTasks();
        input.value = ""
        console.log(tasks)
    })
    function renderTasks(tasks) {
        console.log(tasks);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})