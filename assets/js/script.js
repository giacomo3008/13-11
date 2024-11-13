const taskInput = document.getElementById('input');
const taskButton = document.getElementById('taskButton');
const tasksList = document.getElementById('tasksList');

function aggiungiTask() {
  const task = taskInput.value;
  if (task === '') {
    alert("Inserisci un task valido.");
    return;
  }
  const label = document.createElement('label');
  label.textContent = task;
  const taskElenco = document.createElement('li');
  taskElenco.classList.add('task');

  const checkbox = document.createElement('input');
//   let isClicked = false;
  checkbox.setAttribute('type','checkbox');

  checkbox.onclick = () => {
    // if (isClicked) {
    //     taskElenco.classList.remove('click');
    //     isClicked = false;
    //   } else {
    //     taskElenco.classList.add('click');
    //     isClicked = true;
    //   }
    taskElenco.classList.toggle('click');
  };

  const rimuovi = document.createElement('button');
  rimuovi.textContent = 'Rimuovi';
  rimuovi.classList.add('rimuovi');
  rimuovi.onclick = () => tasksList.removeChild(taskElenco);

  taskElenco.appendChild(checkbox);
  taskElenco.appendChild(label);
  taskElenco.appendChild(rimuovi);
  tasksList.appendChild(taskElenco);

  taskInput.value = '';
}

taskButton.addEventListener('click', aggiungiTask);