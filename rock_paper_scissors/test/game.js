//-------------------------------------------
/*              Definitions

*   Rock-paper-scissors 
Rules -     
    Bot vs User 
    User vs User -- soon 
    API usage -- soon 
*/
//-------------------------------------------

var user_counter = 0;
var bot_counter = 0;

const BotValueElement = document.querySelector("#Botvalue");
const UserValueElement = document.querySelector("#Uservalue");
const buttons = document.querySelectorAll(".button");

function result(userchoice, compchoice) {
    if (userchoice === compchoice) {
        draw();
    } else if (
        (userchoice === 'rock' && compchoice === 'scissors') ||
        (userchoice === 'paper' && compchoice === 'rock') ||
        (userchoice === 'scissors' && compchoice === 'paper')
    ) {
        win();
    } else {
        lose();
    }
}

function win() {
    user_counter++;
    UserValueElement.textContent = user_counter;
    if(user_counter === 7) {
        alert("You win! User: " + user_counter + " Bot: " + bot_counter);
        reset();
    }
}

function draw() {
    alert("It's a draw! User: " + user_counter + " Bot: " + bot_counter);
}

function lose() {
    bot_counter++;
    BotValueElement.textContent = bot_counter;
    if(bot_counter === 7) {
        alert("You lose! User: " + user_counter + " Bot: " + bot_counter);
        reset();
    }
}

function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}

function start(userchoice) {
    const compchoice = getComputerchoice();
    highlightChoice(userchoice, compchoice);
    if(userchoice === 'test') {
        play();
    }
    result(userchoice, compchoice);
}

function highlightChoice(userchoice, compchoice) {
    document.querySelectorAll('.button').forEach(button => button.classList.remove('highlight'));
    document.querySelector(`#${userchoice}`).classList.add('highlight');
    document.querySelector(`#${compchoice}`).classList.add('highlight');
}

function waitForButtonClick() {
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
    UserValueElement.textContent = user_counter;
    BotValueElement.textContent = bot_counter;
    document.querySelectorAll('.button').forEach(button => button.classList.remove('highlight'));
}

waitForButtonClick();
