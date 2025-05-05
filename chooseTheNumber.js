let d = document.getElementById("display");

let winNum = 26;
let userNum = Number(prompt("Enter a number"));

while (userNum != winNum) {
    userNum = Number(prompt("Try again! Enter another number"));
    if(userNum == winNum) {
        d.textContent = "You win!";
        break;
    }
}
