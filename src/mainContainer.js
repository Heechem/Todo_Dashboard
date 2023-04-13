// render the main container

export const renderMain = function () {
  const container = document.querySelector('.container');
  const main = document.createElement('main');
  main.classList.add('central_container');
  main.innerHTML = `<form class="central_task_container">
  <label for="title"></label>
  <input
    type="text"
    class="task_title"
    id="title"
    name="task_title"
    placeholder="Task Title"
    required 
    autocomplete="off"
  />
  <label for="date"></label>
  <input type="date" name="task_date" id="date" required autocomplete="off"/>
  <label for="task_priority"></label>
  <select name="priority" id="task_priority">
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="important">Important</option>
    <option value="critical">critical</option>
  </select>
  <textarea
    name="task_content"
    id="task_content"
    cols="30"
    rows="10"
    placeholder="Task description"
  ></textarea>
  <div class="btn_container">
    <button class="task_create">
      <i class="lni lni-play"> Create</i>
    </button>
<!-- <button class="task_delete">
      <i class="lni lni-eraser"> Delete</i>
    </button> -->
<!-- </div>
</form>
  
  `;
  container.insertAdjacentElement('beforeend', main);
};
