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

// Get a random value from the object
let randomNumber = Math.floor(Math.random() * keys.length);

// Appending the category name in the page
document.querySelector(".category span").innerHTML =
    keys[randomNumber].toUpperCase();
