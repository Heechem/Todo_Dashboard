import { projectArr, projectTodisplay } from './Porject';
import { creatTaskUI } from './TaskCard';

export const todos = function () {
  const todosEL = JSON.parse(localStorage.getItem('data'));

  if (todos) {
    todosEL.forEach((todo) => {
      console.log(todo);
    });
  }
};

export const updateLS = function () {
  const localStorageData = JSON.parse(localStorage.getItem('data'));
  console.log(localStorageData);
};
