const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

//Game options to play by computer and player //Array
function playerChooses(e) {
  const choices = ["lapis", "papyrus", "scalpellus"];

//Computer random choices and links elements in the array to index number and computer choice

  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];

  
//Player's choice
//Converts id to index and Objects to store informations
  if (e.target.id === "lapis") {
    player.currentChoice = choices[0];
  } else if (e.target.id === "papyrus") {
    player.currentChoice = choices[1];
  } else {
    player.currentChoice = choices[2];
  }

//remove console.logs, and stored the message in the displayResult function.
//test a tie 
  
if (player.currentChoice === computer.currentChoice) {
  document.getElementById("displayResult").innerText="It's a tie! You and the computer chose " + computer.currentChoice + ". Ooooh! So exciting. Let's play again!";
}
  //check for Lapis 
else if (player.currentChoice === choices[0]) {
    if (computer.currentChoice === choices[2]) {
      document.getElementById("displayResult").innerText =document.getElementById("displayResult").innerText ="You win! The you chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ".";
    } else {
      document.getElementById("displayResult").innerText ="The computer wins! You chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ". A little bird tells me you'll win next time.";
    }
 }

  //check for Papyrus player's choice 
   else if (player.currentChoice === choices[1]) {
    if (computer.currentChoice === choices[0]) {
      document.getElementById("displayResult").innerText = "You win! The player chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ". The " + player.currentChoice + " wraps the " + computer.currentChoice + "!"; 
    } else {
      document.getElementById("displayResult").innerText = "The computer wins! You chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ".";
    }
 }
  //check for Scalpellus player's choice
   else if (player.currentChoice === choices[2]) {
    if (computer.currentChoice === choices [1]) {
      document.getElementById("displayResult").innerText = "You win! Happy dance!!! You chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ". Someone has some awesome scissors !"; 
    } else {
      document.getElementById("displayResult").innerText = "The computer wins! You chose " + player.currentChoice + " and the computer chose " + computer.currentChoice + ". Ouch, that hurts! The next time will be the good one...";
    }
  }
}

// Click events buttons game - add event handlers
document.getElementById("lapis").addEventListener("click", playerChooses);
document.getElementById("papyrus").addEventListener("click", playerChooses);
document.getElementById("scalpellus").addEventListener("click", playerChooses);
