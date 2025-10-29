console.log("Script loaded successfully.");
import { test() } from './addTaskForm.js';

addtaskButton = document.getElementById("addTask");
displaytaskButton = document.getElementById("displayTask");
taskContainer = document.getElementById("taskContainer");

addtaskButton.addEventListener("click", function() {
    test;
});

displaytaskButton.addEventListener("click", function() {
    alert("Displaying all tasks!");
    // Here you can add logic to display tasks from a list or database
});