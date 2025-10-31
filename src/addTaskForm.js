export function test(){
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

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event){
        event.preventDefault()
        const taskValue = document.getElementById('taskInput').value
        const timeValue = document.getElementById('timeInput').value

        if(taskValue === '' || timeValue === ''){
            alert('Please enter both task and time.')
            return
        }

        localStorage.setItem('task', taskValue)
        localStorage.setItem('time', timeValue)
        alert('Task added successfully!')

        // Clear the input fields after submission
        document.getElementById('taskInput').value = ''
        document.getElementById('timeInput').value = ''
    })
}


