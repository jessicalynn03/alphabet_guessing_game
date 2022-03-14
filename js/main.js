const submitGuess = document.getElementById("submit-guess")
submitGuess.disabled = true;


// Timer function
// let time = 0;
let seconds = 61;

let updateCountdown;

const countDown = () => {
    updateCountdown = setInterval(function(){
        if(seconds > 0){
            seconds--
            timerNum.innerText = `${seconds}s`;
            if(seconds === 0){
                gameOver();
                timerNum.innerText = `Time Out! Computer wins`;
            }
        }
    }, 1000)
}

//Create array with 26 elements. Each element should be a string consisting of one letter of the alphabet. /*
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];

console.log(alphabet);

let newAlphabet = [];

// created a variable called "letter".

let letter = null;

// create a function that will assign the value of "letter" to a randomly selected element of alphabet array.
// randomly choose a letter from the array and assign it to the value letter.
const randomLetters = () =>{
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    // assigning whatever is in that array to letter.
    letter = alphabet[randomIndex];
    console.log(letter);
    // console.log(alphabet.splice(randomIndex, 1));
    // removing from the array the letter that is chosen by computer
    newAlphabet = alphabet.splice(randomIndex, 1);
    // lettersChosen();
    console.log(newAlphabet);
    console.log(alphabet);
}


// randomLetters()

// create a variable called count and initialize it to zero, then console.log it. 

let count = 0; 

console.log(count);


const compScore = document.getElementById("comp-score")
// 
const gameDisplay = document.getElementById("game-display")
// 
const letterChosen = document.getElementById("letter-chosen")

const chosenLetters = document.getElementById("chosen-letters")

const gameForm = document.getElementById("game-form")

// const gameMsg = document.getElementById("game-msg")
const updateMsg = document.getElementById("update-msg")
const timerNum = document.getElementById("timer-num")
const startBtn = document.getElementById("start-btn")
// const pauseBtn = document.getElementById("pause-btn")
const resetBtn = document.getElementById("reset-btn")
const nextBtn = document.getElementById("next-btn")
const userScore = document.getElementById("user-score")

//e.preventDefault() prevents the page from reloading when submitting something into the input field. 

// create a function that will print to the console the value that is inside the input field when the button is clicked. 

// declaring the variable 
let userGuess; 



//create a function that records the value that the user inputs when the "submit" button is clicked. 

const userSubmit = (event) =>{
    event.preventDefault();
    // assigning the users guess to the variable
    userGuess = event.target.guess.value;
    userGuess = userGuess.toUpperCase();
    console.log(userGuess);
    compareLetters();
    // clearInterval(updateCountdown);
    // timerNum.innerText = `0s`;
    letterChosen.innerText = `${letter}`;
    // countDown();
    lettersChosen();
    lettersChosenReset();
    randomLetters();
} 


// wrote an HTML code that will limit the number of characters in the input field to one character. (line 32)

// wrote an html code that will limit allowed characters to only letters.(line 32) 


//create a function that will compare "letter" to the value of the input field. Comparison should happen when the "submit" button is clicked.

let userNum = 0; // create var for user score number and set to 0
let compNum = 0; // create var for computer score number and set to 0


const compareLetters = () => {
    // if user guesses correct letter, add one point to their score
    if(userGuess === letter) {
        if(userNum < 12) {
            userNum++;
            userScore.innerText = userNum;
            if(userNum === 12) {
                //game over function
                clearInterval(updateCountdown);
                gameOver();
                timerNum.innerText = `You Win`;
            }
        }
        //game status message (right)
        updateMsg.innerText = `You're Right!`;
        //if user guesses incorrectly, add one point to computer's score
    } else if(userGuess !== letter) {
        if(compNum < 12) {
            compNum++
            compScore.innerText = compNum;
            if(compNum === 12) {
                //game over function
                clearInterval(updateCountdown);
                gameOver();
                timerNum.innerText = `Computer Wins`;
            }
        }
        //game status message (wrong)
        updateMsg.innerText = `You're Wrong!`;
    }
}

const gameOver = () =>{
    letterChosen.innerText = ``;
    submitGuess.disabled = true;
    timerNum.innerText = `0s`;
    // if(userNum === 2) {
        //     clearInterval(updateCountdown);
        // } else if(compNum ===2) {
            //     clearInterval(updateCountdown)
            // }
        }
        
        const startGame = () =>{
            countDown();
            randomLetters();
            submitGuess.disabled = false;
            // lettersChosen();
            startBtn.removeEventListener("click", startGame);
        }
        startBtn.addEventListener("click", startGame);
        
        
        // Do not have to re-initialize variables. to change an element use innerText or innerContent
        const gameReset = () =>{
            alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];
            // lettersChosen();
            // const liEl = document.querySelectorAll("li");
            // const listId = document.getElementById("chosen-letters");
            seconds = 61;
            timerNum.innerText = `60s`;
            clearInterval(updateCountdown);
            compNum = 0;
            compScore.innerText = compNum;
            userNum = 0;
            userScore.innerText = userNum;
            letterChosen.innerText = ``;
            // to reset HTML form, you must use the .reset function.
            gameForm.reset();
            updateMsg.innerText = `Ready to Play!`;
            submitGuess.disabled = true;
            compLetterList.appendChild(list);
            startBtn.addEventListener("click", startGame);
            
            let ulEl = document.createElement("ul");
            ulEl.setAttribute("id", "comp-letter-list");
            chosenLetters.appendChild(ulEl);
            removeList();
            // lettersChosen();
            // lettersChosenReset();
            // list = document.createElement("li");
            // list.innerHTML = letter;
            // document.getElementById("comp-letter-list").appendChild(list);
            
            // lettersChosenReset();
            // list = document.createElement("li");
            // list.innerHTML = letter;
        }
        let list;
        let compLetterList = document.getElementById("comp-letter-list");
        
        const lettersChosen = () => {
            list = document.createElement("li");
            list.innerHTML = letter;
            compLetterList.appendChild(list);
            // document.getElementById("comp-letter-list").appendChild(list);
        }
        let listId = document.getElementById("chosen-letters");
        
        const removeList = () => {
            // const liEl = document.querySelector("li");
            compLetterList.remove(list);
            // document.getElementById("comp-letter-list").remove(list);
        }
        
        const lettersChosenReset = () => { 
        // list = document.createElement("li");
        // list.innerHTML = letter;
    document.getElementById("comp-letter-list").appendChild(list);
    // removeList();
}

resetBtn.addEventListener("click", gameReset);




// nextBtn.addEventListener("click", nextRound);