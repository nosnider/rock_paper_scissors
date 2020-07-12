function computerPlay(){
  let moves = ['rock','paper','scissors']
  let choice = Math.floor(Math.random() * 3)
  return moves[choice]
}

function playRound(input){
  let playerSelection
  let computerSelection
  let playerScore
  playerScore = Number(document.getElementsByClassName('scores')[0].innerHTML)
  let computerScore
  computerScore = Number(document.getElementsByClassName('scores')[1].innerHTML)

  playerSelection = input
  computerSelection = computerPlay()
  //make sure input case matches
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  // initialize winner variable
  let winner
  //if outcomes match
  if (playerSelection === computerSelection){
    winner = "tie"
  }
  // test logic for where player selects rock
  else if (playerSelection === 'rock'){
    if (computerSelection === 'paper'){
      winner = "computer"
      computerScore ++
      document.getElementsByClassName('scores')[1].innerHTML = computerScore
    }
    else {
      winner = "player"
      playerScore ++
      document.getElementsByClassName('scores')[0].innerHTML = playerScore
    }
  }
  // test logic for where player selects Scissors
  else if (playerSelection === 'scissors'){
    if (computerSelection === 'rock'){
      winner = 'computer'
      computerScore ++
      document.getElementsByClassName('scores')[1].innerHTML = computerScore
    }
    else {
      winner = 'player'
      playerScore ++
      document.getElementsByClassName('scores')[0].innerHTML = playerScore
    }
  }
  // test logic for where player selects paper
  else if (playerSelection === 'paper'){
    if (computerSelection === 'scissors'){
      winner = 'computer'
      computerScore ++
      document.getElementsByClassName('scores')[1].innerHTML = computerScore
    }
    else {
      winner = 'player'
      playerScore ++
      document.getElementsByClassName('scores')[0].innerHTML = playerScore
    }
  }

  document.getElementById('player-alert').innerHTML = `you selected ${playerSelection}`
  document.getElementById('computer-alert').innerHTML = `the computer selected ${computerSelection}`
  //return result
    if (winner === "tie"){
    document.getElementById('winner-alert').innerHTML = "the result is a tie"
  } else {
    document.getElementById('winner-alert').innerHTML = `the ${winner} won!`
  }

  if (playerScore === 3){
    alert('The player has won!')
    document.getElementById('player-alert').innerHTML = ""
    document.getElementById('computer-alert').innerHTML = ""
    document.getElementById('winner-alert').innerHTML = ""
    document.getElementsByClassName('scores')[0].innerHTML = 0
    document.getElementsByClassName('scores')[1].innerHTML = 0
  } else if (computerScore === 3) {
    alert('The computer has won!')
    document.getElementById('player-alert').innerHTML = ""
    document.getElementById('computer-alert').innerHTML = ""
    document.getElementById('winner-alert').innerHTML = ""
    document.getElementsByClassName('scores')[0].innerHTML = 0
    document.getElementsByClassName('scores')[1].innerHTML = 0
  } else {}
}


//initialize button objects
const rock_button = document.querySelector('#rock')
const paper_button = document.querySelector('#paper')
const scissors_button = document.querySelector('#scissors')

rock_button.addEventListener("click", function(){
  playRound('rock');
});
paper_button.addEventListener("click", function(){
  playRound('paper');
});
scissors_button.addEventListener("click", function(){
  playRound('scissors');
});
