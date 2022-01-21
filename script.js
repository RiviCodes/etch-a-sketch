const gridContainer = document.querySelector('#grid');
let defaultGrid = 16;

drawGrid();

function drawGrid(userGrid = defaultGrid) {
  let gridSize = userGrid ** 2;
  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${userGrid}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${userGrid}, 1fr)`;

  for (i = 0; i <= gridSize; i++) {

    gridContainer.appendChild(document.createElement('div'));
  }
}

function paintItBlack() {
  
}

