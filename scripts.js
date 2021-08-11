/* Sets up the board into specific row numbers (16x16 grid) */
const container = document.querySelector('#main-container');
for(let i = 0; i < 256; i++){
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
    let grid_size = prompt("Enter an integer up to 100 for the dimension of grid");
    let refresh = document.getElementsByClassName('row');
    for(let i = 0; i < refresh.length; i++){
        refresh[i].style.backgroundColor = "white";
    }
    if(grid_size > 100){
        grid_size = prompt("Enter an integer up to 100 for the dimension of grid");
    }
}

