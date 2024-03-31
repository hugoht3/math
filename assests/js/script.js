console.log("LOGGGED THIS")

// Wait for the DOM finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            }else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`);
            }

        });
    }
});



function runGame()  {

};


function checkAnswer () {

};

function calculateCorrectAnswer () {

};

function incrementScore () {

};

function displayAdditionQuestion () {

};

function displaySubtractQuestion () {

};

function displayMultiplyQuestion () {

};

