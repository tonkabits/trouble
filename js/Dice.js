class Dice {
    constructor(){
        this.facesArr = [1,2,3,4,5,6]
    }
    roll() {
        let result = Math.random(facesArr)
        console.log(result)
    }
}

class SpecialDice {
    constructor(){
        this.facesArr  = [1,2,3,4, 'Miss Fritter', 'Roadblock']
    }
    roll(){
        let result = Math.random(this.facesArr)
        console.log(result)
    }
}

 
let dice1 = new Dice.roll()
let dice2 = new SpecialDice.roll()

// throwDices()
// movePiece()
// newGame(numerOfPlayers)

// class Player(color, name){}
//   
// 