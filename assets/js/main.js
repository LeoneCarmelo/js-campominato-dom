/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

//import elements from DOM
const btnEl = document.getElementById('btn') // button
const containerEl = document.querySelector('.container') // container
const selectEl = document.querySelector('select') // select


//grid level
function grid(cellQuantity, width_cell, width_container, bombs) {
    let text = 1 // set the text for the first cell
    let points = 0 // set the initial points
    for(let i = 0; i < cellQuantity; i++) { 
        const singleCell = document.createElement('div') // create cell
        singleCell.classList.add('cell') // add class .cell
        singleCell.textContent = text // add text
        singleCell.style.width = width_cell // setting the right width
        singleCell.style.textAlign = 'center' // set textAlign property
        text += 1 // increase the text to set the new name of the new variable
        containerEl.style.width = width_container // set the right width for the container
        containerEl.append(singleCell) //
        singleCell.addEventListener('click', function(){ // set blue color on cell when clicked
            if (bombs.includes(Number(singleCell.textContent))){ // if the textContent of the cell is included in the array 
                singleCell.textContent = ''//remove text
                singleCell.style.backgroundColor = 'orangered'//set a bg-color
                singleCell.style.transition = 'background-color 0.75s'//set a transition
                const resultEl = document.createElement('div') // create an element to let the player see the points he collected
                //styling the element
                resultEl.textContent = `You lost, you've collected ${points} points`
                resultEl.style.textAlign = 'center'
                resultEl.style.padding = '1rem'
                resultEl.style.fontSize = '2rem'
                containerEl.insertAdjacentElement('beforebegin', resultEl)//insert the element before the grid
                //create fake grid
                const fakeGrid = document.createElement('div')
                fakeGrid.style.width = '100%'
                fakeGrid.style.height = '100%'
                fakeGrid.style.position = 'absolute'
                fakeGrid.style.top = '0'
                fakeGrid.style.left = '0'
                fakeGrid.style.zIndex = '1'
                containerEl.append(fakeGrid)
            } else {
                console.log(singleCell.textContent)
                singleCell.textContent = ''
                singleCell.style.backgroundColor = 'deepskyblue'
                singleCell.style.transition = 'background-color 0.75s'
                points += 1
            }  
        })
    } 
}

//generate grid
btnEl.addEventListener('click', function start() {
    containerEl.innerHTML = '' // empty container
    let cellNumbers = levels();
    let cellWidth = widthCell()
    let containerWidth = widthContainer()
    let arrBombs = bombs()
    console.log(arrBombs)
    grid(cellNumbers, cellWidth, containerWidth, arrBombs)
})

//Set difficulty levels
function levels(){
    let numberOfCells = 0
    if (selectEl.value == selectEl[0].value) {
        numberOfCells = selectEl[0].value
    } else if (selectEl.value == selectEl[1].value) {
        numberOfCells = selectEl[1].value
    } else if (selectEl.value == selectEl[2].value) {
        numberOfCells = selectEl[2].value
    }
return numberOfCells
}

//Set width cell
function widthCell() {
    let width = 0
    if (selectEl.value == selectEl[0].value) {
        width = 'calc(100% / 10)'
    } else if (selectEl.value == selectEl[1].value) {
        width = 'calc(100% / 9)'
    } else if (selectEl.value == selectEl[2].value) {
        width = 'calc(100% / 7)'
    }
    return width
}

//Set container width
function widthContainer() {
    let width = 0
    if (selectEl.value == selectEl[0].value) {
        width = '1000px'
    } else if (selectEl.value == selectEl[1].value) {
        width = '900px'
    } else if (selectEl.value == selectEl[2].value) {
        width = '700px'
    }
    return width
}

//Generate the right number of bombs for every level  
function bombs() {
    let arrBombs = []
    if (selectEl.value == selectEl[0].value) {
        arrBombs = generateBombs(selectEl[0].value)
    } else if (selectEl.value == selectEl[1].value) {
        arrBombs = generateBombs(selectEl[1].value)
    } else if (selectEl.value == selectEl[2].value) {
        arrBombs = generateBombs(selectEl[2].value)
    }
    return arrBombs
}
//Generate 16 random bombs
function generateBombs(maxValue) {

    let arrBombs = [];
    let i = 0;
    while (arrBombs.length < 16) {
        const bomb = Math.ceil(Math.random() * maxValue);
        if ( !arrBombs.includes(bomb) ) {
            arrBombs.push(bomb);
        }
        i++;
    }

    return arrBombs;
}
