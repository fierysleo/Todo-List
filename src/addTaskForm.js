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
    newButton.textContent = 'Add Task'

    divContainer.append(newInput,timeInput, newButton )


    divContainer.appendChild(newForm)
    }


