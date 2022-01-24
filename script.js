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

// Add color to the grid's squares/boxes when hovering
gridContainer.addEventListener('mouseover', getColor);

function getColor(event) {
  let square = event.target;
  return square.style.backgroundColor = 'black';
  // RGB test
  /*
  let red = Math.floor((Math.random() * 256) + 1);
  let green = Math.floor((Math.random() * 256) + 1);
  let blue = Math.floor((Math.random() * 256) + 1);
  return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
  */
}

// Resets the grid & creates a new one
function resetGrid() {
  let userGrid = prompt('What grid\'s size do you want? (i.e 16x16)\nType a single value! (i.e 16)\n(Avoid using numbers higher than 100)');
  if (userGrid <= 100) {
    let gridSize = userGrid;
    drawGrid(gridSize);
  } else {
    alert('ERROR\nGrid size must be less than and/or equal to 100')
  }
}