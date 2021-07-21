let testGame = {}


// window.alert('working JS') //testing JS

// this is a 2 step process, the user press the center button(pop-o-matic)
// then picks which pieces he wants to move,

// then next player is active



// this function will require the users to double check they want to refresh so we dont lose the current game
    // window.onbeforeunload = function (event) {
    //     return confirm("Confirm refresh");
    // };



// this Dice will pick a number between 1 and 6
class Dice {
    constructor() {
        this.facesArr = [1, 2, 3, 4, 5, 6]
    }
    roll() {
        let result = this.facesArr[Math.floor(Math.random() * this.facesArr.length)]
        console.log(result)
        return result
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
        return result
    }
}

// user throw dices 
function throwDices() {
    let dice1 = new Dice
    dice1 = dice1.roll()

    let dice2 = new SpecialDice
    dice2 = dice2.roll()

    let dice1dom = document.getElementById('dice1dom')
    let dice2dom = document.getElementById('dice2dom')
    dice1dom.innerHTML = dice1
    dice2dom.innerHTML = dice2
    testGame.dice1 = dice1
    testGame.dice2 = dice2
    return (dice1, dice2)
}

// user see results of the dice throw and pick which piece to move
function addDices() {
    let color = testGame.currentTurn
    console.log('color:'+ color)
    console.log('testGame.colo:'+testGame[color].lastThrow)

    
    
    let sum = testGame.dice1
    testGame[color].lastThrow = sum
    // if(typeof(testGame.dice2) === 'number'){
    //     console.log('dices are numbers')
    //     let sum = testGame.dice1 + testGame.dice2
    //     testGame[color].lastThrow = sum

    // }else if(testGame.dice2 === 'Miss Fritter'){
    //     console.log(`we have ${testGame.dice1} plus ${testGame.dice2}`)
    //     testGame[color].lastThrow = testGame.dice1
    //     testGame[color].hasMissFritter = true
    // } else if (testGame.dice2 === 'Roadblock'){
    //     console.log('roadblock')
    //     if(testGame[color].hasMissFritter){
    //         testGame[color].lastThrow = testGame.dice1
    //     }else{
    //         console.log('you miss a turn')
    //         // i need to make a cycle logic to acomodate for colors schedule
    //         // goToNextPlayer()
    //     }
    // }
}



class Player {
    constructor(color, name) {
        this.color = color,
        this.name = name,
        this.hasMissFritter = false,
        this.lastThrow = 0,
        this.finishedPieces = 0
    }
    make(){
        // makes red player
        switch(this.color){
            case 'red' :
                let redPlayer = {
                    color: this.color,
                    name: this.name,
                    hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                } 
                let playerRedPiece = []
                let startPositionRed = 1
                for(let i = 0; i < 4; i++){
                    playerRedPiece[i] = new Piece(this.color, startPositionRed)
                    // console.log(`This is piece-${i}, of ${this.color} color, and they start at position 0`)
                }
                redPlayer.pieces = playerRedPiece
                return redPlayer
            break

            // makes blue player
            case 'blue' :
                let bluePlayer = {
                    color: this.color,
                    name: this.name,
                    hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerBluePiece = []
                let startPositionBlue = 9
                for(let i = 0; i < 4; i++){
                    playerBluePiece[i] = new Piece(this.color, startPositionBlue)
                    // console.log(`This is piece-${i}, of ${this.color} color, and they start at position 0`)
                }
                bluePlayer.pieces = playerBluePiece
                return bluePlayer
            break

            // makes yellow player
            case 'yellow':
                let yellowPlayer = {
                    color: this.color,
                    name: this.name,
                    hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerYellowPiece = []
                let startPositionYellow = 17
                for (let i = 0; i < 4; i++) {
                    playerYellowPiece[i] = new Piece(this.color, startPositionYellow)
                    // console.log(`This is piece-${i}, of ${this.color} color, and they start at position 0`)
                }
                yellowPlayer.pieces = playerYellowPiece
                return yellowPlayer
            break

            // makes green player
            case 'green':
                let greenPlayer = {
                    color: this.color,
                    name: this.name,
                    hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerGreenPiece = []
                let startPositionGreen = 25
                for (let i = 0; i < 4; i++) {
                    playerGreenPiece[i] = new Piece(this.color, startPositionGreen)
                    // console.log(`This is piece-${i}, of ${this.color} color, and they start at position 0`)
                }
                greenPlayer.pieces = playerGreenPiece
                return greenPlayer
            break
        }
    } 
}

class Piece {
    constructor(color, startPosition){
        this.color = color,
        this.startPosition = startPosition,
        this.currentPosition = startPosition
        
    }

}

// let testPlayer = new Player('blue', 'testName')
// let testMake = new Player('red', 'Rayo')
// let testGenerate = new Player('red', 'Rojito') 
// testGenerate = testGenerate.make()
// console.log(testGenerate)


// let testGenerate2 = new Player('blue', 'Azulito') 
// testGenerate2 = testGenerate2.make()
// console.log({testGenerate2})
//  console.log(testPlayer)



// if current turn blue make pop-O-matic blue
// throw dices
// pick piece
// make move
// update current turn


class Game {
    constructor(){
        this.colorOrder = []
    }

    makeBoard(){
        let boardGame = {}
        boardGame.currentTurn = ''
        boardGame.blocks = []
        for(let i = 1; i <= 32; i++){
            boardGame.blocks[i] = 'emptyss'
        }
        boardGame.blocks.shift() //remove first item of the array to make just 32 
        return boardGame
    }


}

function checkIfGameHasStarted(testGame) {
    if(testGame.currentTurn === undefined){
        alert('please add at least a player to roll the dices')
    }else{
        return true
    }
}



function drawPiecesThatFinished(testGame){
    // check if player has 4 pieces in Finish Line and declare him the winner

    if (testGame.red.finishedPieces >= 4){
        setTimeout(function(){

            alert(`we have a winner and is ${testGame.red.color}`)
        }, 1000) 
    }
    let redFinishLine = document.getElementById('red-finish-line')
    for(let i = 0; i < testGame.red.finishedPieces; i++){
    //    let finishedPiece = document.createElement('div')
        finishedPiece = `<div class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white"><img src="./assets/trophy-solid.svg" class="w-4 h-4"></div>`
    //     return redFinishLine += finishedPiece
        return redFinishLine.innerHTML +=  finishedPiece

    }
}

// movePiece() currently only move red pieces, color of the piece needs to be passed dinamically
function movePiece(id, color){
    alert(`piece is moving ${id} ${color} ${testGame[color].pieces[0].currentPosition}`)
    // console.log(`test generate inside ${redP}`)
        
        console.log(`test game inside ${testGame[color]} ${color}`)
        let btn = document.getElementById(`${id}`)

        btn.remove()
        let index = id.slice(-1);// pick the number portion of the id of the dom element we are targeting
        let prev = testGame[color].pieces[index].currentPosition
        let i = testGame[color].lastThrow + prev


        if(i < 33){
            let destination = document.getElementById(`${i}`)
            let newBtn = `<button id="${id}"class="h-12 w-12 bg-${color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"${color}")'></button>`
            destination.innerHTML = newBtn
        }else{
            console.log('crossed the line')
            testGame[color].finishedPieces += 1
            drawPiecesThatFinished(testGame)
        }
        console.log('crossed the line second')
        return testGame[color].pieces[index].currentPosition = i

    


}

// startgame button action
let players = document.getElementById('startgame')
players.addEventListener('click', () => {

    // we initialize the game board
    testGame = new Game
    testGame = testGame.makeBoard()
    
    let playersDom = document.querySelectorAll('.players')
    console.log(playersDom)

    // color order variable to be pushed to the Game Object
    let colorOrder = []
    for(let i = 0; i < playersDom.length; i++){
        console.log(playersDom[i].value)
        let color = playersDom[i].getAttribute('color')
        if (playersDom[i].value){
            colorOrder.push(color)
            let player = new Player(color, playersDom[i].value)
            testGame[color] = player.make()
 
            let pitsIdString = player.color + '-pits'
            let playerPits = document.getElementById(pitsIdString)
            // chorizo de HTML
            switch(color){
                case 'red':
                case 'yellow':
                let playerHtmlHorizontal = `<div class="flex flex-col min-h-32">
                    <div class="text-xl text-center">
                    ${player.name} - Team Name
                    </div >
                    <div class="flex">
                        <button id="${player.color}-piece-0" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'>1</button>
                    <button id="${player.color}-piece-1" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'>2</button>
                    <button id="${player.color}-piece-2" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'>3</button>
                        <button id="${player.color}-piece-3" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'>4</button>
                    </div>
                </div >`
                playerPits.innerHTML = playerHtmlHorizontal
                break

                case 'blue':
                case 'green':
                let playerHtmlVertical = `<div class="flex flex-col">
                    <div class="text-xl text-center rotate-180">
                         ${player.name} - Team Name
                     </div>
                     <div class="flex flex-col">
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'>1</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'>2</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'>3</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'>4</button>
                     </div>
                 </div>`
                playerPits.innerHTML = playerHtmlVertical
                break
            }   
            
        }

        console.log(colorOrder)
        testGame.colorOrder = colorOrder
        
    }
    console.log('color order'+ testGame.colorOrder)
    setPopActiveColor() //no need for it now
    return testGame
})

// sets the active color when the board is first created
function setPopActiveColor(){

    testGame.currentTurn = testGame.colorOrder[0]//should work like this but it doesnt
    let pop = document.getElementById('pop-o-matic')
    let colorTurn = 'bg-' + testGame.currentTurn + '-500'
    pop.classList = ''
    pop.classList.add('center', 'flex', 'flex-col', 'w-24',
        'md:h-64', 'h-24', 'md:w-64', 'rounded-xl', 'text-xl', 'md:text-3xl',
        'font-extrabold', 'text-white', 'uppercase', 'items-center',
        'justify-center', colorTurn)
    // let i = testGame.colorOrder.length -1
    // testGame.currentTurn = testGame.colorOrder[i]//last of arr

}

// reads the current color and picks the next one, if is the last of the array jumps back to index-0
function getPopNextColor(){

    let i = testGame.colorOrder.indexOf(testGame.currentTurn)
    if (i + 1 < testGame.colorOrder.length ){
        i++
        testGame.currentTurn = testGame.colorOrder[i]
        
    }else{
        testGame.currentTurn = testGame.colorOrder[0]
    }

}

// pop-O-matic button action
let pop = document.getElementById('pop-o-matic')
pop.addEventListener('click', () =>{
    if(checkIfGameHasStarted(testGame)){   
    throwDices()
    addDices()
    getPopNextColor()
    let colorTurn = 'bg-' + testGame.currentTurn + '-500'
    switch(testGame.currentTurn){
        case 'red':

         
            pop.classList = ''
            pop.classList.add('center', 'flex', 'flex-col', 'w-24',
            'md:h-64', 'h-24', 'md:w-64', 'rounded-xl', 'text-xl', 'md:text-3xl',
             'font-extrabold', 'text-white', 'uppercase', 'items-center',
                'justify-center', colorTurn)
            
            

        break
        case 'blue':
           
            pop.classList = ''
            pop.classList.add('center', 'flex', 'flex-col', 'w-24',
                'md:h-64', 'h-24', 'md:w-64', 'rounded-xl', 'text-xl', 'md:text-3xl',
                'font-extrabold', 'text-white', 'uppercase', 'items-center',
                'justify-center', colorTurn)
              
        break
        case 'yellow':
           
            pop.classList = ''
            pop.classList.add('center', 'flex', 'flex-col', 'w-24',
                'md:h-64', 'h-24', 'md:w-64', 'rounded-xl', 'text-xl', 'md:text-3xl',
                'font-extrabold', 'text-white', 'uppercase', 'items-center',
                'justify-center', colorTurn)
                
            break
        case 'green':
      
   
            pop.classList = ''
            pop.classList.add('center', 'flex', 'flex-col', 'w-24',
                'md:h-64', 'h-24', 'md:w-64', 'rounded-xl', 'text-xl', 'md:text-3xl',
                'font-extrabold', 'text-white', 'uppercase', 'items-center',
                'justify-center', colorTurn)
                
        break
    }
    
    
    }
})

