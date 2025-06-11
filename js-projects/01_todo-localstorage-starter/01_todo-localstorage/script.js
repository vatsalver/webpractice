let input = document.getElementById("todo-input");
let add = document.getElementById("add-task-btn");
let list = document.getElementById("todo-list")

let tasks = [];

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
    input.value = ""
    console.log(tasks)
})