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

