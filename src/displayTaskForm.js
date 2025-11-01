export function displayTasks(){
    console.log("Displaying tasks...");

    const mainContainer = document.querySelector('#taskContainer')
    
    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplayContainer')
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.forEach((task, index) => {
        const taskItem = document.createElement('div')
        taskItem.setAttribute('class', 'taskItem')

        const taskName = document.createElement('span')
        taskName.textContent = `Task: ${task.taskName} `

        const taskTime = document.createElement('span')
        taskTime.textContent = `Time: ${task.taskTime} `

        taskItem.appendChild(taskName)
        taskItem.appendChild(taskTime)

        taskDisplay.appendChild(taskItem)
    });



    mainContainer.appendChild(taskDisplay)
}