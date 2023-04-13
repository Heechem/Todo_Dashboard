import { renderMain } from './mainContainer';
import { renderView } from './View';
import { projectArr, projectTodisplay } from './Porject';

let ProjectTitle;

//  the main object to create a card
export const Task = function () {};

export const createCard = function (date, title, priority, description) {
  return (newTask = new Task(title, date, priority, description));
};
// create the card container
export const createTaskCard = function () {
  const main = document.querySelector('.central_container');
  const taskContainer = document.createElement('div');

  taskContainer.classList.add('task_card_container');

  main.insertAdjacentElement('beforeend', taskContainer);
};
