// Selectors

// Selecting each individual rows

var tableRow= document.getElementsByTagName('tr');

var tableCell = document.getElementsByTagName('td');

var tableSlot = document.querySelector('.slot')

// What is the difference between .getElementByTagName vs .query selector. 

const playerTurn = document.querySelector('.player-turn');
const reset = document.querySelector('.reset');

// Click = table cordinates

for(let i = 0; i < tableCell.length; i++){
    tableCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
    });
}

// Beginning Prompt + Player Name

while (!player1){
    var player1 = prompt ('Player One: Enter your name, you will be red')
}

player1Color = 'red'

while(!player2) {
    var player2 = prompt ('Player Two: Enter your name, you will be yellow')
}

player2Color = 'yellow';

// 1st player turn

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

//Ensures when we apply more game logic, I program knows that the background colors are white

Array.prototype.forEach.call(tableCell, (cell) =>{
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
});

// When we click a certain column, it will fill the cell with players 1's color red in the available cell. Working from the bottom to top. 
// Return text Content = Player 2's turn
function changeColor(e) {
    let column = e.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--){
        if(tableRow[i].children[column].style.backgroundColor =='white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer===1) {
                row[0].style.backgroundColor = player1Color;
                if (horizonalCheck() || verticalCheck() || diagnolCheck1() || diagnolCheck2){
                    return(alert('winner'))
                }
                playerTurn.textContent = `${player2}'s turn!`;
                return currentPlayer = 2;
// We are taking the first index of the array, and turning it into player 1's color, else if it doesnt euqal one, then it is players twos color.
            } else {scroll
                row [0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1 }'s turn!`
                return currentPlayer = 1;
            }
        } 
    }
}


function colorMatchCheck(one,two,three,four) {
        return(one == two && one === three && one == four && one !== "white");
}

    function horizonalCheck(){
        for(let row =0; row < tableRow.length; row++){
            for (let col = 0; col < 4; col++){
                // col<4 represents that there are only 4 ways to win horizontally
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor,tableRow[row]. children[col+2].style.backgroundColor,tableRow[row]. children[col+3].style.backgroundColor,tableRow[row])){
                    return true;
                }
            }
        }
    };

    function verticalCheck(){
        for (let col =0; col < 7; col++){
            for(let row = 0; row < 3; row++){
            //row<3 represents that there is only 3 ways to win vertically. 
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                    return true;
                };
            }
        }
    }

    function diagnolCheck1(){
        for (let col = 0; col < 4; col++){
            for (row = 0; row <3; row++){
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                    tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                        return true;
            }
        }
    }
}

//Diagnol Left to Right
function diagnolCheck1(){
    for (let col = 0; col < 4; col++){
        for (row = 0; row <3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
        }
    }
}
}

// Right to left

function diagnolCheck2(){
    for (let col = 0; col < 4; col++){
        for (row = 5; row >2; row--){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                    return true;
        }
    }
}
}

// Things Bugs and thins to work on
//41 minutes
// Change CSS to all black, and make it nicer
// Need to implement the yellow player return.
//https://www.youtube.com/watch?v=Z_IaJQojun8


