let selectedBoxes = [];
let userClicks = [];
let randomNumber;
let currentIndex = 0;
let boxClickedId;
let level = 1;
let user = prompt("Hey,who are you?👀 Enter your name please!")



let redBox = document.querySelector('.red-box');
let yellowBox = document.querySelector('.yellow-box');
let blueBox = document.querySelector('.blue-box');
let greenBox = document.querySelector('.green-box');


let blueSound = document.getElementById('blue-sound');
let greenSound = document.getElementById('green-sound');
let redSound = document.getElementById('red-sound');
let yellowSound = document.getElementById('yellow-sound');
let wrongSound = document.getElementById('wrong-sound');


let condition = document.getElementById('condition');
let startBtn = document.getElementById('start-btn');
let threeDots = document.getElementById('three-dots');


let promptContainer = document.getElementById('prompt-container');
let nameDisplay = document.getElementById('name-display');
let levelDisplay = document.getElementById('level-display');

nameDisplay.textContent = `${user}`;


function hideStartButton() {
  startBtn.classList.add('hidden');
  threeDots.classList.remove('hidden');


}
function showStartButton() {
  startBtn.classList.remove('hidden');
  threeDots.classList.add('hidden');


}



function startGame() {
  hideStartButton();
  generateRandomNumber();
  condition.textContent = '';

  if (randomNumber == 1) {
    redBox.classList.add('light-red');

  } else if (randomNumber == 2) {
    yellowBox.classList.add('light-yellow')

  } else if (randomNumber == 3) {
    greenBox.classList.add('light-green')

  } else {
    blueBox.classList.add('light-blue')


  }

  removeClassLightColor();

}
function removeClassLightColor() {
  setTimeout(() => {
    redBox.classList.remove('light-red');
    blueBox.classList.remove('light-blue');
    yellowBox.classList.remove('light-yellow');
    greenBox.classList.remove('light-green');
  }, 2000)

}


function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 4) + 1;
  selectedBoxes.push(randomNumber);

  return randomNumber;


}

function playSound() {
  if (boxClickedId == 1) {
    redSound.play();
  } else if (boxClickedId == 2) {
    yellowSound.play();
  } else if (boxClickedId == 3) {
    greenSound.play()
  } else {
    blueSound.play();
  }

}


function checkUserClick(event) {
  boxClickedId = event.target.id;
  userClicks.push(boxClickedId);
  console.log(boxClickedId)

  if (userClicks[currentIndex] == selectedBoxes[currentIndex]) {
    currentIndex++;
    playSound();
    if (currentIndex == selectedBoxes.length) {

      userClicks = [];

      condition.textContent = `you won level ${level} `
      levelDisplay.textContent = `score:level ${level}`

      currentIndex = 0;
      level++;

      setTimeout(() => {
        condition.textContent = '';
        startGame();
      }, 2000)



      console.log(currentIndex)
    }
  } else {

    currentIndex = 0;
    wrongSound.play();
    userClicks = [];
    selectedBoxes = [];
    condition.textContent = 'you lost';
    setTimeout(() => {
      condition.textContent = '';
    }, 5000)
    level = 1;
    showStartButton();



  }



}

