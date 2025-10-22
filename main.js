// Create the letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Creating an array from the letters
const lettersArray = Array.from(letters);

// Capturing the letters container
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
    // Create a letter span
    let span = document.createElement("span");

    // Add class to the span
    span.className = "letter-box";

    // Append the letter to the span
    span.appendChild(document.createTextNode(letter));

    // Add the span to the container
    lettersContainer.appendChild(span);
});

let letterSpan = Array.from(document.querySelectorAll(".letter-box"));

const words = {
    programming: [
        "php",
        "javascript",
        "go",
        "scala",
        "fortran",
        "mysql",
        "python",
    ],
    movies: [
        "Prestige",
        "Inception",
        "Parasite",
        "Interstellar",
        "I am legend",
        "Memento",
        "Coco",
        "Up",
    ],
    people: [
        "Albert Einstein",
        "Hitchcock",
        "Alexander",
        "Cleopatra",
        "Mahatma Ghandi",
    ],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
    players: [
        "Wayne Rooney",
        "Lionel Messi",
        "Zidane",
        "Totti",
        "Henry",
        "Ronaldinho",
        "Xavi",
    ],
};

// Get the keys of the object
let keys = Object.keys(words);

// Get a random category from the object
let randomNumber = Math.floor(Math.random() * keys.length);

// Appending the category name in the page
document.querySelector(".category span").innerHTML =
    keys[randomNumber].toUpperCase();

// Get the random array of words
let wordsArray = words[keys[randomNumber]];

// Get the random index from the array of words
let randomWordIndex = Math.floor(Math.random() * wordsArray.length);

// Get the chosen word
let chosenWord = wordsArray[randomWordIndex];

// Get an array from the chosen word
let chosenWordArray = Array.from(chosenWord);

// Catch the guess-letter container
let guessLetterContainer = document.querySelector(".guess-letter");

// Create spans depending on the number of characters
chosenWordArray.forEach((letter) => {
    let spans = document.createElement("span");

    if (letter === " ") {
        spans.className = "space";
    }

    // Appending the spans into our page
    guessLetterContainer.appendChild(spans);
});

// Set the wrong attempts
let wrongAttempts = 0;

// Capture the draw
let theDraw = document.querySelector(".draw");

document.addEventListener("click", (e) => {
    // Getting all the spans that we created
    let guessLetterSpans = document.querySelectorAll(".guess-letter span");

    // Making an array from all the spans that we created
    let guessLetterSpansArray = Array.from(guessLetterSpans);

    guessLetterSpansArray.every(function (e) {
        return !e.innerHTML;
    });

    let status = false;

    // If the target has a class that is letter-box, we will add special class to make the pointer events none
    if (e.target.className === "letter-box") {
        e.target.classList.add("chosen");
    }

    // Get the chosen character by the user
    let chosenLetter = e.target.innerHTML.toLowerCase();

    // Looping on the chosen word
    chosenWordArray.forEach((letter, index) => {
        if (letter.toLowerCase() === chosenLetter) {
            status = true;

            // Depending on the index of both the word and span, we can add the letter
            guessLetterSpansArray.forEach((ele, i) => {
                if (index === i) {
                    ele.innerHTML = chosenLetter.toUpperCase();
                    checkWin();
                }
            });
        }
    });

    // Added this condition  'e.target.classList.contains("chosen")' so that we don't add the wrong class on already chosen words
    if (status !== true && e.target.classList.contains("chosen")) {
        wrongAttempts++;
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        if (wrongAttempts === 8) {
            endGame();
        }
    }
});

function checkWin() {
  const guessSpans = document.querySelectorAll(".guess-letter span");
  const allFilled = Array.from(guessSpans).every((span) => {
    return span.classList.contains("space") || span.innerHTML !== "";
  });

  if (allFilled) {
    const winBox = document.querySelector(".win");
    winBox.style.display = "block";
    document.querySelector(".win-text").innerHTML = `Bravo! You cracked the code — the spotlight’s on you! 🎬`;
    document.querySelector(".row").classList.add("finished");

    // Attach restart logic only when the win box is shown
    // Restart the game button
    document.getElementById("restart").onclick = () => window.location.reload();

    // Optional: hide after 5 seconds
    setTimeout(() => {
      winBox.style.display = "none";
    }, 5000);
  }
}

// Function to end the game upon use all the chances
function endGame() {
    document.querySelector(".end").style.display = "block";
    document.querySelector(".end-text").innerHTML = `${chosenWord}`;
    document.querySelector(".row").classList.add("finished");
}

// Restart the game button
document.getElementById("restart").onclick = () => window.location.reload();
