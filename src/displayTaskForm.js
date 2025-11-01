export function displayTasks(){
    const mainContainer = document.querySelector('#taskContainer')
    
    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplayContainer')

    const storedTask = localStorage.getItem('task')
    const storedTime = localStorage.getItem('time')

    if(storedTask && storedTime){
        const taskItem = document.createElement('p')
        taskItem.textContent = `${storedTask} at ${storedTime}`
        taskDisplay.append(taskItem)
    } else {
        const noTaskItem = document.createElement('p')
        noTaskItem.textContent = 'No tasks available.'
        taskDisplay.appendChild(noTaskItem)
    }

    mainContainer.appendChild(taskDisplay)
}