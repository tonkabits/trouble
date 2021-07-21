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
    if(typeof(testGame.dice2) === 'number'){
        console.log('dices are numbers')
        let sum = testGame.dice1 + testGame.dice2
        testGame.red.lastThrow = sum

    }else if(testGame.dice2 === 'Miss Fritter'){
        console.log(`we have ${testGame.dice1} plus ${testGame.dice2}`)
        testGame.red.lastThrow = testGame.dice1
        testGame.red.hasMissFritter = true
    } else if (testGame.dice2 === 'Roadblock'){
        console.log('roadblock')
        if(testGame.red.hasMissFritter){
            testGame.red.lastThrow = testGame.dice1
        }else{
            testGame.currentTurn = 'blue'
            console.log('you miss a turn')
            // i need to make a cycle logic to acomodate for colors schedule
            // goToNextPlayer()
        }
    }
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
                let startPositionRed = 0
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
                let startPositionBlue = 8
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
                let startPositionYellow = 8
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
                let startPositionGreen = 8
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


let boardGame = {
    currentTurn: 'blue',
    1: 'empty',
    2: 'empty',
    3: 'empty',
    4: 'empty',
    5: 'empty',
    6: 'empty'
}

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
        boardGame.currentTurn = 'red'
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
function movePiece(id){
    // alert(`piece is moving ${id}`)
    // console.log(`test generate inside ${redP}`)

        console.log(`test game inside ${testGame.boardGame}`)
        let btn = document.getElementById(`${id}`)
        btn.remove()
        let index = id.slice(-1);// pick the number portion of the id of the dom element we are targeting
        let prev = testGame.red.pieces[index].currentPosition
        let i = testGame.red.lastThrow + prev
        if(i < 32){
            let destination = document.getElementById(`${i}`)
            let newBtn = `<button id="${id}"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'></button>`
            destination.innerHTML = newBtn
        }else{
            console.log('crossed the line')
            testGame.red.finishedPieces += 1
            drawPiecesThatFinished(testGame)
        }
        console.log('crossed the line second')
        return testGame.red.pieces[index].currentPosition = i

    


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
                        <button id="${player.color}-piece-0" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>1</button>
                    <button id="${player.color}-piece-1" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>2</button>
                    <button id="${player.color}-piece-2" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>3</button>
                        <button id="${player.color}-piece-3" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>4</button>
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
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id)'>1</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id)'>2</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id)'>3</button>
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id)'>4</button>
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

    // we initialize the active players


    // let playersDom = document.querySelectorAll('.players')
    // playersDom.forEach(player = () =>{
    //      let player =  new Player(player.color, player.value)
    //      testGame[player.color] = player.make()
    // })
    // let playerHtml = `<div class="flex flex-col">
                // < div class="text-xl text-center" >
                //     ${player.name } - Team Name
                //             </div >
                // <div class="flex">
                //     <button id="${player.color}-piece-0" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>1</button>
                //     <button id="${player.color}-piece-1" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>2</button>
                //     <button id="${player.color}-piece-2" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>3</button>
                //     <button id="${player.color}-piece-3" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>4</button>
                // </div>
                // </div >`
    // let pitsIdString = player.color +'-pits'
    // let playerPits = document.getElementById(pitsIdString)
    // playerPits.innerHTML = playerHtml


    // let redPlayerName = document.getElementById('redplayer')
    // if(redPlayerName && redPlayerName.value){
    //     let redP = new Player('red', redPlayerName.value )
    //     redP = redP.make()
    //     testGame.red = redP
    //     console.log({redP})
    //     console.log(redP.name)

    //     let redPiecesHtml = `<div class="flex flex-col">
    //                 <div class="text-xl text-center">
    //                     ${redP.name} - Team McQueen
    //                 </div>
    //                 <div class="flex">
    //                     <button id="red-piece-0"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>1</button>
    //                     <button id="red-piece-1"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>2</button>
    //                     <button id="red-piece-2"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>3</button>
    //                     <button id="red-piece-3"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id)'>4</button>
    //                 </div>
    //             </div>`

    //     let redPits = document.getElementById('red-pits')
    //     redPits.innerHTML = redPiecesHtml
    //     // console.log(redP.color)
    //     return redP
    // }else{
    //     console.log('this is null')
    // }

    // let bluePlayerName = document.getElementById('blueplayer')
    // if (bluePlayerName && bluePlayerName.value) {
    //     let blueP = new Player('blue', bluePlayerName.value)
    //     blueP = blueP.make()
    //     testGame.blue = blueP
    //     console.log({ blueP })
    //     console.log(blueP.name)

    //     let bluePiecesHtml = `<div class="flex flex-col">
    //                 <div class="text-xl text-center rotate-180">
    //                     ${blueP.name} - Team The King
    //                 </div>
    //                 <div class="flex flex-col">
    //                     <button id="blue-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-blue-500 rounded-full text-white" onclick='movePiece(this.id)'>1</button>
    //                     <button id="blue-piece-1" class="w-6 md:h-12 h-6 md:w-12 bg-blue-500 rounded-full text-white" onclick='movePiece(this.id)'>2</button>
    //                     <button id="blue-piece-2" class="w-6 md:h-12 h-6 md:w-12 bg-blue-500 rounded-full text-white" onclick='movePiece(this.id)'>3</button>
    //                     <button id="blue-piece-3" class="w-6 md:h-12 h-6 md:w-12 bg-blue-500 rounded-full text-white" onclick='movePiece(this.id)'>4</button>
    //                 </div>
    //             </div>`

    //     let bluePits = document.getElementById('blue-pits')
    //     bluePits.innerHTML = bluePiecesHtml
    //     // console.log(redP.color)
    //     return blueP
    // } else {
    //     console.log('this is null')
    // }

    // let yellowPlayerName = document.getElementById('yellowplayer').value
    // let greenPlayerName = document.getElementById('greenplayer').value
    // console.log(redPlayerName, bluePlayerName, yellowPlayerName, greenPlayerName)
    
    return testGame
})

// pop-O-matic button action
let pop = document.getElementById('pop-o-matic')
pop.addEventListener('click', () =>{
    if(checkIfGameHasStarted(testGame)){   
    throwDices()
    addDices()

    switch(testGame.currentTurn){
        case 'red':
            console.log('do red turn logic')
            testGame.currentTurn = 'blue'
            pop.classList.remove('bg-red-500')
            pop.classList.add('bg-' + testGame.currentTurn + '-500')

        break
        case 'blue':
       
            console.log('do blue turn logic')
            testGame.currentTurn = 'yellow'
            pop.classList.remove('bg-blue-500')
            pop.classList.add('bg-' + testGame.currentTurn + '-500')
        break
        case 'yellow':
      
            console.log('do yellow turn logic')
            testGame.currentTurn = 'green'
            pop.classList.remove('bg-yellow-500')
            pop.classList.add('bg-' + testGame.currentTurn + '-500')
            break
        case 'green':
      
            console.log('do green turn logic')
            testGame.currentTurn = 'red'
            pop.classList.remove('bg-green-500')
            pop.classList.add('bg-' + testGame.currentTurn + '-500')
        break
    }
    }
})

