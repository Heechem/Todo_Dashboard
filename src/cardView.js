import { renderMain } from './mainContainer';
import { Task, createTaskCard, createCard } from './TaskCreate';
import { renderView } from './View';
import { creatTaskUI, LocalDom, init } from './TaskCard';
import { projectArr, projectTodisplay, storedProjects } from './Porject';
import { todos, updateLS } from './localStorage';

export const renderCard = function () {
  const main = document.querySelector('.central_container');
  const asideList = document.querySelector('.aside_todo_items');
  const btnCreate = document.querySelector('.task_create');
  const formContainer = document.querySelector('.central_task_container');

  // render the card Task
  init();
  btnCreate.addEventListener('click', (e) => {
    const inputs = formContainer.querySelectorAll('input');
    e.preventDefault();

    // gard to check if there is a project
    if (projectArr.length === 0) {
      alert('please create a project before ');
      return;
    }
    if (projectTodisplay == undefined) {
      alert('Please make sure to select a project');
      return;
    }
    creatTaskUI();
    // empty the values in the FormData

    inputs.forEach((i) => (i.value = ''));
    updateDOM();

    toggleList();
  });

  // delete the card task

  main.addEventListener('click', (i) => {
    const taskToRemove = asideList.closest('.fa-solid.fa-clipboard-list');
    const cardToTarget = i.target.closest('div').dataset.set;
    const cardSet = i.target.closest('div');

    const liCreate = asideList.querySelector(`li[data-set="${cardToTarget}"]`);

    // Remove the the task list from the aside panel
    if (!i.target.classList.contains('task_delete')) return;

    if (i.target.dataset.set !== '' || cardToTarget === liCreate.dataset.set) {
      const respone = confirm('Are you sure you want to delete this task');
      if (respone) {
        localStorage.removeItem('cards');
        i.target.closest('div').remove();
        liCreate.remove();
      }

      if (!respone) return;
    }
  });
};

// Update the DOM with the projects and the card selected

const updateDOM = function () {
  const main = document.querySelector('.central_container');
  const cardContainer = document.querySelector('.task_card_container');
  const asideList = document.querySelector('.aside_project');

  asideList.addEventListener('click', (i) => {
    const chk = i.target;
    chk.addEventListener('change', () => {
      if (chk.type !== 'checkbox') return;
      const currentElement = Array.from(cardContainer.children);

      // Toggle the display for the choose project

      currentElement.forEach((curEl) => {
        console.log(currentElement);
        if (curEl.id !== projectTodisplay || curEl.id === undefined) {
          curEl.classList.add('hidden');
        } else {
          curEl.classList.remove('hidden');
        }
      });
    });
  });
};

// toggle if the task is done or not

const toggleList = function () {
  const asideList = document.querySelector('.aside_panel');
  asideList.addEventListener('click', (i) => {
    const liDone = i.target.closest('i');
    console.log(liDone);
    liDone.classList.toggle('done');
  });
};
