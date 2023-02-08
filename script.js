const gridContainer = document.getElementById('gridContainer');
const gridSquares = document.getElementsByClassName('gridSquare'); //becomes an array of values

//function that includes a nested for loop
//the first loop creates a div with the class gridColumn 16 times 
//and appends them to the gridContainer div in the html file
//everytime the first loop creates 1 gridColumn div, the second 
//loop creates 16 gridSquare divs and appends them all to the single gridColumn div.
//In conjunction with css rules using flexbox, this creates a 16x16 grid of squares
function createGrid() {
    for (let i = 0; i < 16; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.className = "gridColumn";
        gridContainer.appendChild(gridColumn);
        
        for (let i = 0; i < 16; i++) {
        const createSquare = document.createElement('div');
        createSquare.className = "gridSquare";
        gridColumn.appendChild(createSquare);
        }
    }
}

createGrid();


//the for loop iterates through the gridSquares array as long as i is less than the length of the array 
//then we use addEventListener mouseover to change the background color of each div in the array when the mouse
//hovers over them.
//In simpler terms, this allows us to color in every square in the array as long as the value of i never reaches the 
//length of the array. This will never occur because the length of an array is always 1 more than its last index value.
for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener('mouseover', function() {
        gridSquares[i].style.background = "red";
    });
}


