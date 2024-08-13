'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const domScore = document.querySelector('.score');
const againBtn = document.querySelector('.again')
const body = document.querySelector('body');
const number = document.querySelector('.number');
console.log(secretNumber)
let score = 5;

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Please enter a number!';
  } else if (guess === secretNumber) {
    message.textContent = 'You win the game 🥳';
    body.style.backgroundColor = "#60b347"
    number.style.width = "30rem"
    number.textContent = secretNumber;

    // high score
    let highScore = 0
    if(score > highScore){
      highScore = score
    }
    document.querySelector('.highscore').textContent = highScore
  } else if (guess > secretNumber) {
    message.textContent = '📈 Too high';

    if(score > 1){
    score--;
    domScore.textContent = score
    }else{
      message.textContent = 'You lost the game!';
      domScore.textContent = 0
      body.style.backgroundColor = "red"
      number.textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    message.textContent = '📉 Too low';

    if(score > 1){
      score--;
      domScore.textContent = score
      }else{
        message.textContent = 'You lost the game!';
        domScore.textContent = 0
        body.style.backgroundColor = "red"
        number.textContent = secretNumber; 
      }
  }
});

againBtn.addEventListener('click', () =>{
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = "#222"
  number.style.width = "15rem"
  number.textContent = "?"
  score = domScore.textContent = 7
  document.querySelector('.guess').value = '';
  console.log(secretNumber)
  message.textContent = "Start guessing..."
})