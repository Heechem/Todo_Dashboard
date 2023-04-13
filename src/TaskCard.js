import { renderMain } from './mainContainer';
import { renderView } from './View';
import { Task, createTaskCard, createCard } from './TaskCreate';
import { projectArr, projectTodisplay, storedProjects } from './Porject';

// Get the data from the form
const getData = function () {
  const formContainer = document.querySelector('.central_task_container');
  const dataArr = [...new FormData(formContainer)];
  const data = Object.fromEntries(dataArr);
  console.log(data, dataArr);
  return { data, dataArr };
};

// return the HTML LI
const createLi = function (data) {
  return `
      <ul>
                ${projectTodisplay}
                <li data-set=${data.task_title}>${data.task_title}</li>
                <li>${data.task_date}</li>
                <li>${data.priority}</li>
                <textarea name="" id="" cols="15" rows="8" disabled>${data.task_content}</textarea>
              </ul>
              <button class="lni lni-trash-can task_delete"></button>
            </div>
  `;
};

// render the card UI
export const creatTaskUI = function () {
  const taskContainer = document.querySelector('.task_card_container');
  const taskCard = document.createElement('div');
  const { data } = getData();

  // guard to not have an emtpy task
  if (data.task_title === '' || data.task_date === '') {
    alert('please fill all the required informations !!!!');
    return;
  }

  taskCard.classList.add('task_card');
  taskCard.dataset.set = `${data.task_title}`;
  taskCard.id = projectTodisplay;
  taskCard.innerHTML = createLi(data);
  taskContainer.appendChild(taskCard);
  createLiTitle(data);
  LocalDom(data);
};

// add the data to the localStorage

export const LocalDom = function (x) {
  const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
  const updatedCards = [...existingCards, x];
  localStorage.setItem('cards', JSON.stringify(updatedCards));
};

// append the li task to the aside task list
const createLiTitle = function (x) {
  const asideList = document.querySelector('.aside_todo_items');
  const liCreate = document.createElement('li');
  liCreate.dataset.set = `${x.task_title}`;

  liCreate.innerHTML = `
   <i class="fa-solid fa-clipboard-list">  ${x.task_title} </i>

  `;
  asideList.appendChild(liCreate);
};

// adding the local storage

export const init = function () {
  const taskContainer = document.querySelector('.task_card_container');
  const asideList = document.querySelector('.aside_todo_items');

  const storage = localStorage.getItem('cards');
  if (storage) {
    const data = JSON.parse(storage);

    data.forEach((item) => {
      const taskCard = document.createElement('div');
      taskCard.classList.add('task_card');
      taskCard.dataset.set = `${item.task_title}`;
      taskCard.id = projectTodisplay;
      taskCard.innerHTML = createLi(item);
      console.log(taskContainer, asideList, taskCard);
      taskContainer.appendChild(taskCard);
    });
  }
};
