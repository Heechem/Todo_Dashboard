import { Task, createTaskCard, createCard } from './TaskCreate';
import { renderView } from './View';
import { renderMain } from './mainContainer';
import { renderCard } from './cardView';
import { markupProject } from './Porject';
import { todos } from './localStorage';

window.addEventListener('load', () => {
  renderView();
  renderMain();
  createTaskCard();
  renderCard();
  markupProject();
});
