console.log("Script loaded successfully.");
import { test } from './addTaskForm.js';

const addtaskButton = document.getElementById("addTask");
const displaytaskButton = document.getElementById("displayTask");
const taskContainer = document.getElementById("taskContainer");


addtaskButton.addEventListener("click", function() {
    taskContainer.innerHTML = ""; // Clear previous content
    test();
});

displaytaskButton.addEventListener("click", function() {
    alert("Displaying all tasks!");
    // Here you can add logic to display tasks from a list or database
});


