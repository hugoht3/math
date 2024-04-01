// Wait for the DOM finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});
// !!!!!!!!!!!!!!!!!!!!! Pay close attention to the closing tags or the code will not reposnd in the live server and nothing will shonw as error 

function runGame(gameType) {
    // create 2 random number generators
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type : ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }




};

/**
 * This kind of coment works as a example tab for any piece of code.Hover over the check answer to see it
 */
function checkAnswer() {

};

function calculateCorrectAnswer() {

};

function incrementScore() {

};

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
};

function displaySubtractQuestion() {

};

function displayMultiplyQuestion() {

};