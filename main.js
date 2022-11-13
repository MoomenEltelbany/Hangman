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
