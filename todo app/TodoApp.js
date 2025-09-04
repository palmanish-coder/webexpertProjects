// TodoApp.js
let input = document.querySelector('input');
let addbtn = document.querySelector('button');
let lis = document.querySelector('ul');

addbtn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = input.value;

    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'delete';
    deletebtn.classList.add('delete');
    li.appendChild(deletebtn);
    lis.appendChild(li);
    input.value = '';
    input.focus();
}
);
lis.addEventListener('click', function(event) {
    if (event.target.nodeName == 'BUTTON') {
     let listItem = event.target.parentElement;
        listItem.remove();
        console.log('Task deleted');
    }
}
);
