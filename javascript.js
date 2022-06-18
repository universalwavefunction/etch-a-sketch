const grid = document.querySelector('#grid-container');
const rgbButton = document.querySelector('#rgb-button');
const blackButton = document.querySelector('#black-button');
const resetButton = document.querySelector('#reset-button')

var slider = document.getElementById("myRange");
var columnsAndRows = slider.value;
console.log(columnsAndRows);
var output = document.getElementById("columnsAndRows");
output.innerHTML = columnsAndRows;

slider.addEventListener('input', () => {
  columnsAndRows = slider.value;
  output.innerHTML = columnsAndRows;
  resetGrid();
  makeGrid(columnsAndRows, columnsAndRows);
});

gridItemColor = "black";

function makeGrid(columns, rows) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-columns', columns);

  for (let i = 0; i < (columns * rows); i++) {
    let gridItem = document.createElement('div');
    grid.appendChild(gridItem).className = "gridItem";
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.background = gridItemColor;
    })
  }
}

function resetGrid() {
  griddy = document.querySelectorAll(".gridItem");
  griddy.forEach(gridItem => grid.removeChild(gridItem));
}

function rgb() {
  const randomColor = (min, max) => Math.floor(Math.random() * (max- min + 1));
  const r = randomColor(0,255);
  const g = randomColor(0,255);
  const b = randomColor(0,255);
  gridItemColor = `rgb(${r},${g},${b})`;
}

blackButton.addEventListener('click', () => {
  gridItemColor = "black";
  resetGrid();
  makeGrid(columnsAndRows, columnsAndRows);
  removeEventListener("mouseover", rgb);
});

rgbButton.addEventListener('click', () => {
  resetGrid();
  makeGrid(columnsAndRows, columnsAndRows);
  addEventListener("mouseover", rgb);
});

resetButton.addEventListener('click', () => {
  resetGrid();
  makeGrid(columnsAndRows, columnsAndRows);
})

makeGrid(columnsAndRows, columnsAndRows);
