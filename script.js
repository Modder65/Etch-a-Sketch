const masterContainer = document.getElementById('masterContainer');
const gridContainer = document.getElementById('gridContainer');
const gridSquares = document.getElementsByClassName('gridSquare'); //becomes an array of values
const resetGrid = document.getElementById('resetButton');
const clearGrid = document.getElementById('clearButton');


//function that includes a nested for loop
//the first loop creates a div with the class gridColumn 16 times 
//and appends them to the gridContainer div in the html file
//everytime the first loop creates 1 gridColumn div, the second 
//loop creates 16 gridSquare divs and appends them all to the single gridColumn div.
//In conjunction with css rules using flexbox, this creates a 16x16 grid of squares
function createGrid(squareCount) {
    for (let i = 0; i < squareCount; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.className = "gridColumn";
        gridContainer.appendChild(gridColumn);
        
        for (let i = 0; i < squareCount; i++) {
        const createSquare = document.createElement('div');
        createSquare.className = "gridSquare";
        gridColumn.appendChild(createSquare);
        }
    }
}

createGrid(16);

//used in the resetGrid button click event to remove the current grid before adding the new one
//based on the users choice to prevent the old grid from being included in the new grid
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//function to generate random RGB color value to pass to the mouseover function
//for styling the etch-a-sketch
function randomRGB() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
}


//the for loop iterates through the gridSquares array as long as i is less than the length of the array 
//then we use addEventListener mouseover to change the background color of each div in the array when the mouse
//hovers over them.
//In simpler terms, this allows us to color in every square in the array as long as the value of i never reaches the 
//length of the array. This will never occur because the length of an array is always 1 more than its last index value.
for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener('mouseover', function() {
        gridSquares[i].style.background = randomRGB();
    });
}


//adds click event to the reset grid button on the page that allows the user to input a custom value for 
//the number of squares on each side of the grid
resetGrid.addEventListener('click', function () {
    let userChoice = prompt("How many squares per side? (Max is 100)");
    removeAllChildren(gridContainer);
    createGrid(parseInt(userChoice));
    //reincluded the mouseover event in the resetbutton function otherwise
    //the color change that occurs on the divs when moused over will no longer
    //function after the grid is reset by the user
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener('mouseover', function() {
            gridSquares[i].style.background = randomRGB();
        });
    }
});

//adds click event to the clear button on the page that allows the user to erase all the color they added
//to the etch-a-sketch grid to start over
clearGrid.addEventListener('click', function () {
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.background = "white";
    }
});