/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Nayan Islam 
 * Date: 22/05/2024
 *
 */

 // select elements & assign them to variables

 let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');



 // function 
let creatTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label  = document.createElement('label');

    label.innerHTML = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}
