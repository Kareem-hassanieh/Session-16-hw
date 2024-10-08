let boxes = [];
let randomNumber;

let redBox = document.querySelector('.red-box');
let yellowBox = document.querySelector('.yellow-box');
let blueBox = document.querySelector('.blue-box');
let greenBox = document.querySelector('.green-box');


function startGame() {
  generateRandomNumber();
  boxes.push(randomNumber);
  if (randomNumber == 1) {
    redBox.classList.add('light-red');
  } else if (randomNumber == 2) {
    yellowBox.classList.add('light-yellow')
  } else if (randomNumber == 3) {

    blueBox.classList.add('light-blue')
  } else {
    greenBox.classList.add('light-green')
  }

 removeClassLightColor();

}
function removeClassLightColor(){
  setTimeout(()=>{
    redBox.classList.remove('light-red'); 
    blueBox.classList.remove('light-blue');
    yellowBox.classList.remove('light-yellow');
    greenBox.classList.remove('light-green');
  },1000)
  console.log(boxes)
}


function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 4) + 1;

  return randomNumber;
 

}

