//Game values
let min =1,
    max =10,
    winninNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI min an max

minNum.textContent = min;
maxNum.textContent = max;

//Play againa event listener
game.addEventListener('mousedown', function(e){ //vazoume mousedown molis pame katw to pontiki na ginetai i ananeosi
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    //Validate 

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won 
    if(guess === winninNum){
        //Game over

        gameOver(true, `${winninNum} is correct , YOU WIN!`);

    }else{
        //Wrong number
        guessesLeft -=1;

        if(guessesLeft === 0){
            //Game over-lost
            gameOver(false, `Game over, you lost. The correct number was ${winninNum}`);

        }else{
            //Games continues - answer wrong

            //change border color
            guessInput.style.borderColor = 'red';
            //CLear input
            guessInput.vaue = '';
            //Game continues 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }
    }

});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

     //disable input
     guessInput.disabled = true;
     //set text color 
     message.style.color = color;
     //change border color
     guessInput.style.borderColor = color;
     // set message
     setMessage(msg);
     // play gain
     guessBtn.value = 'PLAY AGAIN';
     guessBtn.className += 'play-again';

}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//get winninng number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}