const gridContainer = document.querySelector('#grid');
let defaultGrid = 16;

// Draws default/on-load grid
drawGrid();

function drawGrid(userGrid = defaultGrid) {
  let gridSize = userGrid ** 2;
  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${userGrid}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${userGrid}, 1fr)`;

  for (i = 0; i <= gridSize; i++) {
    let square = document.createElement('div');
    //square.classList.add('square');
    gridContainer.appendChild(square);
  }
}

gridContainer.addEventListener('mouseover', getColor);

function getColor(event) {
  let square = event.target;
  return square.style.backgroundColor = 'black';
  // Multi-color test
  /*
  let red = Math.floor((Math.random() * 256) + 1);
  let green = Math.floor((Math.random() * 256) + 1);
  let blue = Math.floor((Math.random() * 256) + 1);
  return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
  */
}