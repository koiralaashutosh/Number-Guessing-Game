const max = prompt("Enter the max number:");
const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt(`Guess the number from 1 to ${max}:`);

while (true) {
    if (guess === "quit") {
        console.log("User quit the game.");
        break;
    }

    if (guess == random) {
        console.log("🎉 You are right! Congrats!!");
        break;
    } else if (guess < random) {
        guess = prompt("Too small! Try again or type 'quit' to exit:");
    } else if (guess > random) {
        guess = prompt("Too big! Try again or type 'quit' to exit:");
    } else {
        guess = prompt("Invalid input. Enter a number or 'quit' to exit:");
    }
}
