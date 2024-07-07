//-------------------------------------------
/*              Definintions

*   Rock'paper' scissors 
Rules -     
    Bot vs User 
    User vs User -- soon 
    Api usage -- soon 
    


*/
//-------------------------------------------
var user_counter = 0;
var bot_counter = 0;
let count = 0;

const BotValue = document.querySelector("#Botvalue");
const UserValue = document.querySelector("#Uservalue");
const btns = document.querySelectorAll(".button");


function result(userchoice, compchoice) {
    if (userchoice === 'rock') {
        if (compchoice === 'rock') {
            draw();
        }
        else if (compchoice === 'paper') {
            lose();
        }
        else {
            win();
        }
    }
    else if (userchoice === 'paper') {
        if (compchoice === 'rock') {
            win();
        }
        else if (compchoice === 'paper') {
            draw();
        }
        else {
            lose();
        }
    }
    else {
        if (compchoice === 'rock') {
            lose();
        }
        else if (compchoice === 'paper') {
            win();
        }
        else {
            draw();
        }
    }
}
function win() {
    userValueElement.textContent = user_counter;
    if(user_counter ==7){
    alert("You win! User: " + user_counter + " Bot: " + bot_counter);
    reset();
    }
}
function draw() {
    alert("It's a draw! User: " + user_counter + " Bot: " + bot_counter);
}
function lose() {
    bot_counter++;
    botValueElement.textContent = bot_counter;
    if(bot_counter == 7){
    alert("You lose! User: " + user_counter + " Bot: " + bot_counter);
    reset();
    }
}

function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function start(userchoice) {
    const compchoice = getComputerchoice();
    result(userchoice, compchoice);
}

function highlightChoice(userchoice, compchoice) {
    document.querySelectorAll('.button').forEach(button => button.classList.remove('highlight'));
    document.querySelector(`#${userchoice}Btn`).classList.add('highlight');
    document.querySelector(`#${compchoice}Btn`).classList.add('highlight');
}

function waitForButtonClick() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const userchoice = this.id;
            start(userchoice);
        });
    });
}

function reset() {
    alert("You have reset the game");
    user_counter = 0;
    bot_counter = 0;
    userValueElement.textContent = user_counter;
    botValueElement.textContent = bot_counter;
    document.querySelector('.button'), forEach(button => button.classList.remove('highlight'));
}

waitForButtonClick();