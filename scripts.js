/* Total grid size (in pixels) of CSS grid */
const BOARD_SIZE = 432;
let grid_size = 16;

/* Sets up the board into specific row numbers (16x16 grid) */
const container = document.querySelector('#main-container');
for(let i = 0; i < grid_size*grid_size; i++){
    let grid = document.createElement('div');
    grid.classList.add('row');
    container.appendChild(grid);
}

/* Used to shade in squares on mouseover */
let shading = function() {
    this.style.backgroundColor = "black";
}


/* Binds shading function to mouse enter on grid divs */
let grid = document.getElementsByClassName('row');
for(let i = 0; i < grid.length; i++){
    grid[i].addEventListener("mouseenter", shading);
}

/* Clears board and resizes */
function reset() {
    /* Clears grid of tiles and asks for new size */
    let input_num = prompt("Enter an integer up to 100 for the dimension of grid");
    let refresh = document.getElementsByClassName('row');
    for(let i = 0; i < refresh.length; i++){
        refresh[i].style.backgroundColor = "white";
    }
    /* Checks to see that size is an integer and not greater than 100x100 */
    grid_size = Number.parseInt(input_num, 10);
    while(grid_size > 100 && grid_size <= 0){
        input_num = prompt("Enter an integer up to 100 for the dimension of grid");
        grid_size = Number.parseInt(input_num, 10);
    }
    /* Uses input number to resize grid tiles */
    let square_size = Math.round(BOARD_SIZE / grid_size) - 2;

    /* Deletes former board. Deleted in revers so as not to skip nodes in DOM */
    let container = document.querySelector('#main-container');
    let grid = document.getElementsByClassName('row');
    for(let j = grid.length-1; j >= 0; j--){
        container.removeChild(grid[j]);
    }

    /* Appends new grid tiles to DOM */
    for(let i = 0; i < grid_size*grid_size; i++){
        let grid = document.createElement('div');
        grid.classList.add('row');
        container.appendChild(grid);
    }

    /* Adds re-sized tiles to container and binds event listener to new tiles */
    let newGrid = document.getElementsByClassName('row');
    for(let i = 0; i < newGrid.length; i++){
        newGrid[i].style.width = square_size+"px";
        newGrid[i].style.height = square_size+"px";
        newGrid[i].addEventListener("mouseenter", shading);
    }

    let newContainer = document.getElementById('main-container');
    newContainer.style.setProperty('grid-template-columns', 'repeat('+input_num+', 1fr)');

}

