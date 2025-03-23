let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '22/05/2024'
  }, 
  {
    item: 'Go to College', 
    dueDate: '22/05/2024'
  }, 
  {
    item: 'Complete React',
    dueDate: '22/05/2024'
  }
];
displayItems();

//Here I will be add a feature that is after refresh the page data not be lost means that will by using local storage (Today - 22/05/2024)

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  console.log(todoList);
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  
  // displayElement.innerText = '';
  for (let i=0; i<todoList.length; i++) {
    let = todoItem = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    // let {todoItem, dueDate} = todoList[i]; //I will do fix in future (Today - 22/05/2024)

    newHtml += `
        <span>${todoItem}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();
        ">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
   
}