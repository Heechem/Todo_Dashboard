import { creatTaskUI } from './TaskCard';

// Render the aside panel

export const renderView = function () {
  const container = document.querySelector('.container');
  const aside = document.createElement('aside');
  aside.classList.add('aside_panel');
  aside.setAttribute('id', 'aside');
  console.log(aside);

  aside.innerHTML = `
<i class="fa-solid fa-house"> Task list</i>
<div class="aside_first_li">
  <ul class="aside_todo_items">
    
  </ul>
  <div class="aside_first_li completed"></div>
</div>
<div class="aside_project">
  <h3 class="aside_project_title">
    Projects <i class="fa-solid fa-plus"></i>
  </h3>
  
</div>
`;

  container.insertAdjacentElement('afterbegin', aside);
};
