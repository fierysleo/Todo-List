export function test(){
    const tasks = []

    function Task(taskName, taskTime) {
        this.taskName = taskName;
        this.taskTime = taskTime;
    }

    const mainContainder = document.querySelector('#taskContainer')

    const divContainer = document.createElement('div')
    divContainer.setAttribute('id', 'formContainer')
    mainContainder.appendChild(divContainer)

    const newForm = document.createElement('form')
    newForm.setAttribute('id', 'addTaskForm')

    const newInput = document.createElement('input')
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('id', 'taskInput')
    newInput.setAttribute('name', 'taskInput')
    newInput.setAttribute('placeholder', 'Enter your task here')

    const timeInput = document.createElement('input')
    timeInput.setAttribute('type', 'time')
    timeInput.setAttribute('id', 'timeInput')
    timeInput.setAttribute('name', 'timeInput')
    timeInput.setAttribute('placeholder', 'Set time')

    const newButton = document.createElement('button')
    newButton.setAttribute('type', 'submit')
    newButton.setAttribute('id', 'submitButton')
    newButton.textContent = 'Add Task'

    divContainer.append(newInput,timeInput, newButton )


    divContainer.appendChild(newForm)

    
    newButton.addEventListener('click', function(event){
        event.preventDefault();
        const taskName = document.getElementById('taskInput').value;
        const taskTime = document.getElementById('timeInput').value;

        const newTask = new Task (taskName,taskTime);

        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        console.log("Tasks array:", tasks);
    
        document.getElementById('taskInput').value = ''
        document.getElementById('timeInput').value = ''
    })
}


