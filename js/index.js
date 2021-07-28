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
        // this.facesArr = [1, 2, 3, 4, 5, 6]
    }
    roll() {
        let result = this.facesArr[Math.floor(Math.random() * this.facesArr.length)]
        console.log(result)
        return result
    }
}

// user throw dices 
function throwDices() {
    let dice1dom = document.getElementById('dice1dom')
    let dice2dom = document.getElementById('dice2dom')
    dice1dom.innerHTML = ''
    dice2dom.innerHTML = ''

    let dice1 = new Dice
    dice1 = dice1.roll()

    let dice2 = new SpecialDice
    dice2 = dice2.roll()

    // clear the input
    // half sec animation
    // then show dice results
    let diceAni1  = new Image(64,64)
    diceAni1.src = './assets/dices/rolling.gif'
    dice1dom.appendChild(diceAni1)
    let diceAni2  = new Image(64,64)
    diceAni2.src = './assets/dices/rollings.gif'
    dice2dom.appendChild(diceAni2)
    setTimeout(() =>{ 
        dice1dom.innerHTML = ''
        dice2dom.innerHTML = ''
        let imgDice1 = new Image(64, 64)
        imgDice1.src = './assets/dices/' + dice1 + '.png'
        // dice1dom.innerHTML = dice1
        dice1dom.appendChild(imgDice1)
        let imgDice2 = new Image(64, 64)
        imgDice2.src = './assets/dices/' + dice2 + '.png'
        // dice2dom.innerHTML = dice2
        dice2dom.appendChild(imgDice2)
    },1000)
    
    


    testGame.dice1 = dice1
    testGame.dice2 = dice2
    return (dice1, dice2)
}


// Math behind the result of throwing the dices
function addDices() {
    let color = testGame.currentTurn
    console.log('color:'+ color)
    console.log('testGame.colo:'+testGame[color].lastThrow)

    
    
    let sum = testGame.dice1 + testGame.dice2
    testGame[color].lastThrow = sum
    if(typeof(testGame.dice2) === 'number'){
        console.log('dices are numbers')
        let sum = testGame.dice1 + testGame.dice2
        testGame[color].lastThrow = sum

    }else if(testGame.dice2 === 'Miss Fritter'){
        console.log(`we have ${testGame.dice1} plus ${testGame.dice2}`)
        testGame[color].lastThrow = testGame.dice1
        testGame.hasMissFritter = testGame.currentTurn
        drawMissFritter(testGame.currentTurn)
    } 

    else if (testGame.dice2 === 'Roadblock'){
        console.log('roadblock')
        if(testGame.hasMissFritter === testGame.currentTurn){
            sendMessage(`Unstopable!!!`, './assets/power.gif', './assets/sounds/unstopable.mp3')
            testGame[color].lastThrow = testGame.dice1
        }else{
            console.log('you miss a turn')
               testGame[color].lastThrow = 0
            //    alert('Oh NO!... you miss a turn')
                sendMessage(`Oh NO!... you miss a turn`, './assets/13-StopSign_500_sm.gif', './assets/sounds/car_crash.wav')
                getPopNextColor()
                updateActionTextToPress()
        
        }
    }
}


// Up to 4 players
class Player {
    constructor(color, name) {
        this.color = color,
        this.name = name,
        // this.hasMissFritter = false,
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
                    // hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                } 
                let playerRedPiece = []
                let startPositionRed = 0
                for(let i = 0; i < 4; i++){
                    playerRedPiece[i] = new Piece(this.color, startPositionRed)
                    this.domID = `${this.color}-piece-${i}`
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
                    // hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerBluePiece = []
                let startPositionBlue = 8
                for(let i = 0; i < 4; i++){
                    playerBluePiece[i] = new Piece(this.color, startPositionBlue)
                    this.domID = `${this.color}-piece-${i}`
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
                    // hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerYellowPiece = []
                let startPositionYellow = 16
                for (let i = 0; i < 4; i++) {
                    playerYellowPiece[i] = new Piece(this.color, startPositionYellow)
                    this.domID = `${this.color}-piece-${i}`
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
                    // hasMissFritter: this.hasMissFritter,
                    lastThrow: this.lastThrow,
                    finishedPieces: this.finishedPieces
                }
                let playerGreenPiece = []
                let startPositionGreen = 24
                for (let i = 0; i < 4; i++) {
                    playerGreenPiece[i] = new Piece(this.color, startPositionGreen)
                    this.domID = `${this.color}-piece-${i}`
                    // console.log(`This is piece-${i}, of ${this.color} color, and they start at position 0`)
                }
                greenPlayer.pieces = playerGreenPiece
                return greenPlayer
            break
        }
    } 
}


// 4 pieces for player
class Piece {
    constructor(color, startPosition){
        this.color = color,
        this.startPosition = startPosition,
        this.currentPosition = startPosition,
        this.stepsToFinishLine = 32,
        this.domID = ''
        
    }

}



// create a game given the number and colors of the players
class Game {
    constructor(){
        this.colorOrder = []
    }

    makeBoard(){
        let boardGame = {}
        boardGame.currentTurn = ''
        boardGame.blocks = []
        for(let i = 1; i <= 33; i++){
            boardGame.blocks[i] = null
            
        }
        boardGame.blocks.shift() //remove first item of the array to make just 32 
        return boardGame
    }


}

function checkIfGameHasStarted(testGame) {
    if(testGame.currentTurn === undefined){
        // alert('please add at least a player to roll the dices')
        sendMessage('please add at least two player to roll the dices','./assets/car-gif-17_sm.gif','./assets/sounds/burnout.wav')
    }else{
        return true
    }
}
function updateActionTextToPress(){
    let action = document.getElementById('action-text')
    let color = testGame.currentTurn 
    action.innerHTML = color+' PRESS'
}
function updateActionTextToMove() {
    let action = document.getElementById('action-text')
    let color = testGame.currentTurn 
    action.innerHTML = color+' MOVE'
}

function drawMissFritter(color){
    testGame.hasMissFritter = color
    let oldFritter = document.getElementById('fritter')
    if(oldFritter){
        oldFritter.parentNode.removeChild(oldFritter)
    }
    let strFritter = color+'-finish-line'
    let fritterInPits = document.getElementById(strFritter)
    let DOM_fritterImg = document.createElement('img')
    DOM_fritterImg.setAttribute('id', 'fritter')
    DOM_fritterImg.src = './assets/MissFritter18xss.png'
    fritterInPits.appendChild(DOM_fritterImg)
}

function sendMessage(strTitle, modalImage, modalSound){
    toggleModal()
    let title = document.getElementById('modal-title')
    title.innerHTML = strTitle
    let image = document.getElementById('modal-image')
    image.setAttribute('src', modalImage)
    let sound = document.getElementById('modal-sound')
    sound.setAttribute('src', modalSound)
    sound.play()


    setTimeout(() => {
        toggleModal()
    },1500)
}

function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}


function drawPiecesThatFinished(player){
    // check if player has 4 pieces in Finish Line and declare him the winner

    if (player.finishedPieces >= 4){
        setTimeout(function(){

            // alert(`we have a winner and is ${player.color}`)
            sendMessage(`we have a winner and is ${player.color}`,'./assets/14-Bravo_500_sm.gif' ,'')
        }, 1000) 
    }
    let redFinishLine = document.getElementById('red-finish-line')
    let blueFinishLine = document.getElementById('blue-finish-line')
    let yellowFinishLine = document.getElementById('yellow-finish-line')
    let greenFinishLine = document.getElementById('green-finish-line')

    for(let i = 0; i < player.finishedPieces; i++){
    //    let finishedPiece = document.createElement('div')

        switch(player.color){
            case 'red':
                finishedRedPiece = `<div class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white"><img src="./assets/trophy-solid.svg" class="w-4 h-4"></div>`
                return redFinishLine.innerHTML += finishedRedPiece
            break    
            case 'blue':
                finishedBluePiece = `<div class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white"><img src="./assets/trophy-solid.svg" class="w-4 h-4"></div>`
                return blueFinishLine.innerHTML += finishedBluePiece
            break
            case 'yellow':
                finishedYellowPiece = `<div class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white"><img src="./assets/trophy-solid.svg" class="w-4 h-4"></div>`
                return yellowFinishLine.innerHTML += finishedYellowPiece
            break
            case 'green':
                finishedGreenPiece = `<div class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white"><img src="./assets/trophy-solid.svg" class="w-4 h-4"></div>`
                return greenFinishLine.innerHTML += finishedGreenPiece
            break
        }

    }
}

// Does the logic of removing the moving piece,
// calculating the next location and adding the given piece, to the board, the pits or the finish line

function movePiece(id, color){
    // alert(`piece is moving of ID: ${id} and color ${color} and has a current position of ${testGame[color].pieces[0].currentPosition}`)
        if(testGame.currentTurn !== color){
            sendMessage(`hold on is not your turn, is ${testGame.currentTurn} time move`, './assets/13-StopSign_500_sm.gif', './assets/sounds/braking.wav','')
            
            return
        }
    // console.log(`test generate inside ${redP}`)
        getPopNextColor()
        updateActionTextToPress() 
        console.log(`test game inside ${testGame[color]} ${color}`)
        let btn = document.getElementById(`${id}`)
        btn.remove()
        let index = id.slice(-1);// pick the number portion of the id of the dom element we are targeting
        testGame[color].pieces[index].domID = id //save the domID of the piece to resolve same location conflicts
        
        let pieceCurrentPosition = testGame[color].pieces[index].currentPosition 
    
        let i = testGame[color].lastThrow + pieceCurrentPosition
        let lastThrow = testGame[color].lastThrow
        testGame[color].pieces[index].stepsToFinishLine -= lastThrow
        console.log('this is the result of lasthrow '+ lastThrow + ' and result '+i )
       

        
        if(i >= 33){
            //   this fails sometimes, i think is bcause it needs time to get the dom element
            // testGame[color].pieces[index].hasLooped = true
            
            i = Math.abs((testGame[color].lastThrow + pieceCurrentPosition) - 32)
                console.log(i)
                console.log('more than 33 but no exit')
                let destination1 = document.getElementById(`${i}`)
                let newBtn2 = `<button id="${id}"class="h-12 w-12 bg-${color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"${color}")'></button>`
                destination1.innerHTML = newBtn2
            
        }

    // by conflics reads the id of the old object and creates a new Object piece inside the pits

    if (testGame.blocks[i] === null) {
        console.log('this block is NULL')
        testGame.blocks[i] = id
    } else if (testGame.blocks[i]) {
        console.log('hey we have a conflict')
        sendMessage(`Oh NO!... back to the pits`, './assets/13-StopSign_500_sm.gif', './assets/sounds/car_crash.wav')
        // gets the str content of that block
        let bouncedPiece = testGame.blocks[i]
        let btnToBeRemoved = document.getElementById(bouncedPiece)
        console.log('bouncedPiece' + bouncedPiece)

        //if the button exists remove it 
        if (btnToBeRemoved) {
            btnToBeRemoved.remove()
        }
        // create his replacement in the appropiate color

        // gets the pits from the bounced piece
        let iniColor = bouncedPiece.slice(0, 1)
        console.log(iniColor)
        switch (iniColor) {
            case 'r':
                let bouncedRed = new Piece('red', 0)
                testGame.red.pieces.push(bouncedRed)
                let j = testGame.red.pieces.length - 1
                let redPitsElement = document.getElementById('red-pits-buttons')
                let redBounced = `<button id="red-piece-${j}"class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"red")'></button>`
                redPitsElement.innerHTML += redBounced
                break
            case 'b':
                let bouncedBlue = new Piece('blue', 8)
                testGame.blue.pieces.push(bouncedBlue)
                let k = testGame.blue.pieces.length - 1
                let bluePitsElement = document.getElementById('blue-pits-buttons')
                let blueBounced = `<button id="blue-piece-${k}"class="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"blue")'></button>`
                bluePitsElement.innerHTML += blueBounced
                break
            case 'y':
                let bouncedYellow = new Piece('yellow', 16)
                testGame.yellow.pieces.push(bouncedYellow)
                let l = testGame.yellow.pieces.length - 1
                let yellowPitsElement = document.getElementById('yellow-pits-buttons')
                let yellowBounced = `<button id="yellow-piece-${l}"class="h-12 w-12 bg-yellow-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"yellow")'></button>`
                yellowPitsElement.innerHTML += yellowBounced
                break
            case 'g':
                let bouncedGreen = new Piece('green', 24)
                testGame.green.pieces.push(bouncedGreen)
                let m = testGame.green.pieces.length - 1
                let greenPitsElement = document.getElementById('green-pits-buttons')
                let greenBounced = `<button id="green-piece-${m}"class="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"green")'></button>`
                greenPitsElement.innerHTML += greenBounced
                break
        }


    }
      




        let destination = document.getElementById(`${i}`)
        let newBtn = `<button id="${id}"class="h-12 w-12 bg-${color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id,"${color}")'></button>`
        destination.innerHTML = newBtn
        
        if (testGame[color].pieces[index].stepsToFinishLine < 0) {
            console.log('this one made it to the finish line')

            // switch stament with color to redraw piece is the corresponding finish line plus ++ the pieces in finish line count
            testGame[color].finishedPieces += 1
            let destination = document.getElementById(`${i}`)
            destination.innerHTML = ''
            drawPiecesThatFinished(testGame[color])
        }
        

        console.log('crossed the line second')
        testGame.blocks[testGame[color].pieces[index].currentPosition] = null //set to null if we remove the piece, we should check for conflicts before doing this
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
                    ${player.name}
                    </div >
                    <div id="${player.color}-pits-buttons" class="flex">
                        <button id="${player.color}-piece-0" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                    <button id="${player.color}-piece-1" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                    <button id="${player.color}-piece-2" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                        <button id="${player.color}-piece-3" class="h-12 w-12 bg-${player.color}-500 rounded-full flex items-center justify-center text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                    </div>
                </div >`
                playerPits.innerHTML = playerHtmlHorizontal
                break

                case 'blue':
                case 'green':
                let playerHtmlVertical = `<div class="flex flex-row justify-center">
                    <div class="text-xl text-center rotate-180 flex items-center">
                        <span style=" writing-mode: vertical-rl; text-orientation: upright;">${player.name}</span>
                     </div>
                     <div id="${player.color}-pits-buttons" class="flex flex-col">
                         <button id="${player.color}-piece-0" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                         <button id="${player.color}-piece-1" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                         <button id="${player.color}-piece-2" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'></button>
                         <button id="${player.color}-piece-3" class="w-6 md:h-12 h-6 md:w-12 bg-${player.color}-500 rounded-full text-white" onclick='movePiece(this.id, "${player.color}")'></button>
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
    let colorTurn = 'bg-red-500'
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
    let colorTurn = 'bg-' + testGame.currentTurn + '-500'
    switch (testGame.currentTurn) {
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

// pop-O-matic button action
let pop = document.getElementById('pop-o-matic')
pop.addEventListener('click', () =>{
    if(checkIfGameHasStarted(testGame)){   
        
        throwDices()
        addDices()
        updateActionTextToMove()
    
    
    }
})

// author: Luis Quintero
// https://github.com/tonkabits/trouble

