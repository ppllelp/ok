var turn = 'O'
var win = false;
var winner = '';
var blocks = document.querySelectorAll('.table-block');
var turnObject = document.getElementById('turn');

newGame();

for (var block of blocks) {
    // 1. Modify the code here to check click event on each block
    block.onclick = function (event) {
        // modify the condition here to continue the game play as long as there is no winner
        if (winner == '') {
            console.log(123);
            // 4. Modify the code here to check whether the clicking block is avialable.
            if (event.target.innerHTML == '') {
                event.target.innerHTML = turn;
                checkResult();
            }          
            
        }
    }
}

function checkResult() {
    // 2. Modify the code here to check whether someone win the game

    if (winning_condition()) {
        //Game end and someone wins the game
        winner = turn;
        turnObject.innerHTML = "Game win by " + winner;
    } else if (draw_condition()) {
        // Game end and no-one wins the game
        turnObject.innerHTML = "Game draw";
    } else {
        // The game is on going
       // turn = turn === 'O' ? 'X' : 'O';
       if (turn== 'O') {
        turn= 'X';
       } else {
        turn= 'O';
       }
        turnObject.innerHTML = "Turn: " + turn;
    }
}
function newGame() {
    turn = 'O';
    turnObject.innerHTML = "Turn: " + turn;
    winner = '';
    win = false;
    for (var block of blocks) {
        block.innerHTML ='';
    }
    // 3. Modify the code here to reset the game to initial state
}
function winning_condition() {
    for (let i = 0; i < 7; i+=3) {//console.log(i);
        if (blocks[0+i].innerHTML==blocks[1+i].innerHTML && blocks[1+i].innerHTML==blocks[2+i].innerHTML && blocks[2+i].innerHTML != '')  {
            
            return true;
        } 
    }
    for (let i = 0; i < 3; i+=1) {//console.log(i);
        if (blocks[0+i].innerHTML==blocks[3+i].innerHTML && blocks[6+i].innerHTML==blocks[3+i].innerHTML && blocks[3+i].innerHTML != '')  {
            
            return true;
        } 
    }
    if (blocks[2].innerHTML==blocks[4].innerHTML && blocks[4].innerHTML==blocks[6].innerHTML && blocks[4].innerHTML != '')  {
            
        return true;
    } 
    if (blocks[0].innerHTML==blocks[4].innerHTML && blocks[4].innerHTML==blocks[8].innerHTML && blocks[4].innerHTML != '')  {
            
        return true;
    } 
    return false;

}
function draw_condition() {
    for (var block of blocks) {
        if (block.innerHTML == '') {
            return false;break;
        }
    }
    return turn;
}