console.log("Hello");

//Create array with 26 elements. Each element should be a string consisting of one letter of the alphabet. /*

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];

console.log(alphabet);

// created a variable called "letter".

let letter = null;

// create a function that will assign the value of "letter" to a randomly selected element of alphabet array.
// randomly choose a letter from the array and assign it to the value letter.
const randomLetters = () =>{
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    letter = alphabet[randomIndex];
    console.log(letter);
}
randomLetters()

// create a variable called count and initialize it to zero, then console.log it. 

let count = 0; 

console.log(count);


const compScore = document.getElementById("comps-score")
// 
const gameDisplay = document.getElementById("game-display")
// 
const letterChosen = document.getElementById("letter-chosen")

const chosenLetters = document.getElementById("chosen-letters")

const gameForm = document.getElementById("game-form")
const submitGuess = document.getElementById("submit-guess")

const gameMsg = document.getElementById("game-msg")
const updateMsg = document.getElementById("update-msg")
const timerNum = document.getElementById("timer-num")
const startButton = document.getElementById("start-button")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("reset-button")
const userScore = document.getElementById("user-score")

//e.preventDefault() prevents the page from reloading when submitting something into the input field. 

// create a function that will print to the console the value that is inside the input field when the button is clicked. 

// let time = 0;
// let seconds = 30;


// const countDown = () =>{
// let seconds = time % 30;
// timerNum.innerText = `${seconds}`;
// }

// declaring the variable 
let userGuess; 



//create a function that records the value that the user inputs when the "submit" button is clicked. 

const userSubmit = (event) =>{
    event.preventDefault();
    // assigning the users guess to the variable
    userGuess = event.target.guess.value;
    userGuess = userGuess.toUpperCase();
    console.log(userGuess);
} 

//create a function that will compare "letter" to the value of the input field. 

// wrote an HTML code that will limit the number of characters in the input field to one character. 

// wrote an html code that will limit allowed characters to only letters. 

