const game = () => {

    //create the grid
    const makeRows = (rows, cols) => {
        const container = document.querySelector(".container");
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        };
    };

    //fill the grid 
    const paintSketch = () => {

        const gridItems = document.querySelectorAll(".container .grid-item");
        
        gridItems.forEach((gridItem) => {
            gridItem.addEventListener("mouseover", function () {
                //this.classList.add("hoveredOver");
                this.style.backgroundColor = "black";
                //this.style.backgroundColor = decideColor();
            });
        });
    };
    
    //create a new clear grid by square size
    const clearSketch = () => {

        const btnClearSketch = document.querySelector(".buttonClearSketch");

        btnClearSketch.addEventListener("click", function () {
            let newRows = +prompt("How many squares per side?", "16");
            let newCols = newRows;
            removeOldGrid();
            makeRows(newRows, newCols);
            paintSketch();
        });
    };

    //remove the old grid sketch
    const removeOldGrid = () => {

        const removedGrids = document.querySelectorAll(".grid-item");
        const containerGrid = document.querySelector(".container");

        removedGrids.forEach((cell) => {
            containerGrid.removeChild(cell);
        });
    };

    //call functions
    makeRows(16, 16);
    paintSketch();
    clearSketch();
    
};
//call the game
game();