//set width and height = to x
//loop through width / by size of blocks
//create function that takes click position and
//maps it to relevant div, then changes that divs color

const grid = document.querySelector('#grid-container');

//grid.style.cssText = 'display: grid; grid-template-columns: auto; background-color: blue; padding: 10px'

let gridSize = 256;

for (let i = 0; i < gridSize; i++) {
  let gridItem = document.createElement('div');
  grid.appendChild(gridItem).className = "gridItem";
}
console.log(grid)
