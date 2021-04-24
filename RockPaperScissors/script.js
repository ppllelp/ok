var userShape = '';
var compShape = '';
var userScore = 0;
var compScore = 0;
var tieGames = 0;
var slect = 0;

var output = document.getElementById('stage');
output.style.fontSize = '3em'

function startGame(){    
    randomShape(); 
    checkResult();
    updateScores();
}

function resetGame(){    
    var images = document.getElementsByTagName('img')
    for (var im of images){
        im.style.opacity = 1;
    }
    userShape = '';
    compShape = '';
    userScore = 0;
    compScore = 0;    
    output.innerText = ''

    document.getElementsByTagName('th')[0].innerText = `Game #${userScore+compScore+tieGames+1}`
    document.getElementById('userScore').innerText = `#Game win: ${userScore}`
    document.getElementById('compScore').innerText = `#Game win: ${compScore}`    
    document.getElementById('resetButton').disabled = true;    

   // 5. If the game end, user MUST click reset before start the new game
   document.getElementById("user_rockImg").style = "opacity: 1; ";
   document.getElementById("user_paperImg").style = "opacity: 1; ";
   document.getElementById("user_scissorsImg").style = "opacity: 1;";
}


function selectedShape(obj){    

    // 5. If the game end, user MUST click reset before start the new game

    output.innerText = ''
    document.getElementsByTagName('th')[0].innerText = `Game #${userScore+compScore+tieGames+1}`
    document.getElementById("comp_rockImg").style.opacity = 1;
    document.getElementById("comp_paperImg").style.opacity = 1;
    document.getElementById("comp_scissorsImg").style.opacity = 1;
    document.getElementById("user_rockImg").style.opacity = 1;
    document.getElementById("user_paperImg").style.opacity = 1;
    document.getElementById("user_scissorsImg").style.opacity = 1;

    // 1. Write some code here to specify the userShape based on the image they clicked.
    console.log(obj.alt);
    if (obj.alt != 'uscissors') {
        document.getElementById("user_scissorsImg").style.opacity = 0.2; 
    }
    if (obj.alt != 'upaper') {
        document.getElementById("user_paperImg").style.opacity = 0.2; 
    }
    if (obj.alt != 'urock') {
        document.getElementById("user_rockImg").style.opacity = 0.2; 
    }
    userShape = obj.alt;

    // After user selected their shape, the start button will be activated.
    document.getElementById('startButton').disabled = false;
}

function randomShape(){
    // 2. Write some code here to specify the compShape randomly.
    slect = Math.floor(Math.random() * 9);
    console.log(slect);
    if (slect <3) {
        compShape = 'urock';
        document.getElementById("comp_paperImg").style.opacity = 0.2;
        document.getElementById("comp_scissorsImg").style.opacity = 0.2;
    } else if (slect < 6)  {
        compShape = 'upaper';
        document.getElementById("comp_rockImg").style.opacity = 0.2;
        document.getElementById("comp_scissorsImg").style.opacity = 0.2;
    } 
    else {
        compShape = 'uscissors';
        document.getElementById("comp_rockImg").style.opacity = 0.2;
        document.getElementById("comp_paperImg").style.opacity = 0.2;
    } 

    
}

function checkResult(){
    // 3. Write some code here to compute the result of each game, and update
    // userScore and compScore
    if (userShape == 'urock'  && compShape == 'uscissors') {
       userScore += 1;       
    } else if (userShape == 'uscissors'  && compShape == 'upaper') {
        userScore += 1;
    } 
    else if (userShape == 'upaper'  && compShape == 'urock') {
        userScore += 1;
    } 
    else if (userShape  == compShape ) {
        tieGames += 1;
    }   
    else {
        compScore += 1;
    }
    console.log(userScore,compScore,tieGames)
    document.getElementById('startButton').disabled = false;
    setTimeout(() => { 
    document.getElementById("comp_rockImg").style.opacity = 1;
    document.getElementById("comp_paperImg").style.opacity = 1;
    document.getElementById("comp_scissorsImg").style.opacity = 1;
    document.getElementById("user_rockImg").style.opacity = 1;
    document.getElementById("user_paperImg").style.opacity = 1;
    document.getElementById("user_scissorsImg").style.opacity = 1;
     }, 3000);
    // After check the result of the current match, the start button will be deactivated.    
}

function updateScores(){
    // 4. Write some code here to update the scores of the whole game. 
    // If there exist a player with more than 3 scores, the game end.
    document.getElementById("userScore").innerText = '#Game win: '+userScore;
    document.getElementById("compScore").innerText = '#Game win: '+compScore;
    if (userScore >= 3) {
        document.getElementById("stage").innerText = 'Congratulation, You WIN!!!';
        document.getElementById('resetButton').disabled = false;
        document.getElementById('startButton').disabled = true;

    } else if (compScore >= 3) {
        document.getElementById("stage").innerText = 'Sorry, You Lose.';
        document.getElementById('resetButton').disabled = false;
        document.getElementById('startButton').disabled = true;
    } 
    if (userScore >= 3 ||compScore >= 3 ) {
    document.getElementById("user_rockImg").style = "opacity: 1;pointer-events:none;";
    document.getElementById("user_paperImg").style = "opacity: 1;pointer-events:none;";
    document.getElementById("user_scissorsImg").style = "opacity: 1;pointer-events:none;";

    }
}