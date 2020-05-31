function computerPlay(){
  let moves = ['rock','paper','scissors']
  let choice = Math.floor(Math.random() * 3)
  return moves[choice]
}

function playRound(playerSelection, computerSelection){
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
    }
    else {
      winner = "player"
    }
  }
  // test logic for where player selects Scissors
  else if (playerSelection === 'scissors'){
    if (computerSelection === 'rock'){
      winner = 'computer'
    }
    else {
      winner = 'player'
    }
  }
  // test logic for where player selects paper
  else if (playerSelection === 'paper'){
    if (computerSelection === 'scissors'){
      winner = 'computer'
    }
    else {
      winner = 'player'
    }
  }
  // return result
  if (winner === "tie"){
    return ["The result is a tie!",winner]
  } else {
    return [`the winner is the ${winner}`,winner]
  }
}

function playerInput(){
  let playerSelection
  while (true){
    playerSelection = prompt('rock, paper or scissors?')
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === ''){
      alert('please enter a value')
    }
    else{
      break
    }
  }
  return playerSelection
}

function game(){
  let playerScore = 0
  let computerScore = 0

  while ( (playerScore < 3 && computerScore < 3) ) {
    console.log(`score - player:${playerScore} computer:${computerScore}`)
    let playerSelection = playerInput()
    let computerSelection = computerPlay()
    console.log(`player selection: ${playerSelection}`)
    console.log(`computer selection: ${computerSelection}`)
    let results = playRound(playerSelection,computerSelection)
    console.log(results[0])
    if (results[1] == 'player') {
      playerScore++
    } else if (results[1] == 'computer') {
      computerScore++
    }
  }

  if (playerScore === 3){
    alert('The player has won!')
  } else {
    alert('The computer has won!')
  }

}