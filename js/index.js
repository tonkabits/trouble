// window.alert('working JS') //testing JS

// this Dice will pick a number between 1 and 6
class Dice {
    constructor() {
        this.facesArr = [1, 2, 3, 4, 5, 6]
    }
    roll() {
        let result = this.facesArr[Math.floor(Math.random() * this.facesArr.length)]
        console.log(result)
    }
}

// this dice will pick a number between 1 and 4, or Miss fritter(skip roadblock) or Roadblock
class SpecialDice {
    constructor() {
        this.facesArr = [1, 2, 3, 4, 'Miss Fritter', 'Roadblock']
    }
    roll() {
        let result = this.facesArr[Math.floor(Math.random() * this.facesArr.length)]
        console.log(result)
    }
}

// user throw dices 
function throwDices() {
    let dice1 = new Dice
    dice1.roll()
    let dice2 = new SpecialDice
    dice2.roll()
}

// user see results of the dice throw and pick which piece to move




throwDices()

// movePiece()
function movePiece(player, piece){
// if player is active
//  move piece
}

// bluePlayer.piece1.makeMove()

// newGame(numerOfPlayers)

// class Player(color, name){}
//   
// 