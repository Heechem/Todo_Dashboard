export const projectArr = [];
let count = 0;
export let projectTodisplay;
// create the Markup for the project

export const markupProject = function () {
  const asidePanel = document.querySelector('.aside_panel');

  const addProject = asidePanel.querySelector('.fa-plus');

  addProject.addEventListener('click', () => {
    count++;
    createProject();
  });
  asidePanel.addEventListener('click', (e) => {
    deleteProject(e);
  });
};

// create the project and append it to the DOM ( array and UI )

const createProject = function () {
  const projectList = document.querySelector('.aside_project');
  const projectName = prompt('Please introduce the name of the project ');
  const ProjectDiv = document.createElement('div');

  ProjectDiv.classList.add('aside_second_li');
  ProjectDiv.dataset.count = `${count}`;
  ProjectDiv.id = projectTodisplay;
  ProjectDiv.innerHTML = `
  <input class="radioCheck" type="checkbox" id=${projectName} value="${projectName}">
  <label for="${projectName}>
  <i class="lni lni-folder" > ${projectName} </i></label>
        <button class="lni lni-trash-can"></button>`;
  // checking if the project name isn't empty
  if (projectName === '') {
    alert(`Project name can't be empty`);
    return;
  }
  // push the project created into the array to store it
  projectArr.push(projectName);
  projectList.insertAdjacentElement('beforeend', ProjectDiv);

  currentProject();
  projetToD();
  localStorage.setItem('Projects', JSON.stringify(projectArr));
};

// delete the projecte

const deleteProject = function (e) {
  if (!e.target.classList.contains('lni')) return;
  e.target.addEventListener('click', () => {
    if (e.target.closest('div').innerHTML !== '') {
      const response = confirm('Are you sure you want to delete your project');
      if (response) {
        const projectToRemove = e.target.closest('div').textContent;
        // store the projects into the array
        e.target.closest('div').remove();
        projectArr.splice(projectArr.indexOf(projectToRemove) - 1, 1);
      } else return;

      return projectArr;
    }
  });
};

// check wich project is selected

const currentProject = function (x) {
  const projectList = document.querySelector('.aside_project');
  const checkboxes = projectList.querySelectorAll('input');
  projectList.addEventListener('change', (i) => {
    if (i.target.type !== 'checkbox') return;
    for (let j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked === true) {
        checkboxes[j].checked = false;
      }
    }
    if (i.target.checked === true) {
      i.target.checked = false;
    } else {
      i.target.checked = true;
    }
  });
};

// Project to display on the card

const projetToD = function () {
  const projectList = document.querySelector('.aside_project');
  projectList.addEventListener('click', (i) => {
    const chk = i.target;
    chk.addEventListener('change', () => {
      if (chk.type !== 'checkbox') return;
      if (chk.checked) {
        projectTodisplay = chk.id;
      }
    });
  });

  return projectTodisplay;
};

// store the project into local storatge

export const storedProjects = JSON.parse(localStorage.getItem('Projects'));
