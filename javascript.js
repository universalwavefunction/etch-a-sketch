//set width and height = to x
//loop through width / by size of blocks
//create function that takes click position and
//maps it to relevant div, then changes that divs color

const grid = document.querySelector('#grid-container');

//grid.style.cssText = 'display: grid; grid-template-columns: auto; background-color: blue; padding: 10px'


function makeGrid(columns, rows) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-columns', columns);

  for (let i = 0; i < (columns * rows); i++) {
    let gridItem = document.createElement('div');
    grid.appendChild(gridItem).className = "gridItem";
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.background = "green";
    })
  }
}


columnsAndRows = document.getElementById("myRange").value;
const gridSize = document.getElementById('gridSize');
gridSize.innerHTML = "Grid size: " + columnsAndRows + " x " + columnsAndRows;
makeGrid(columnsAndRows, columnsAndRows)
