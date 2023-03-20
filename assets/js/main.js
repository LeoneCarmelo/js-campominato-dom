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
function grid(cellQuantity, width_cell, width_container) {
        let text = 1 // set the text for the first cell
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
                console.log(singleCell.textContent)
                singleCell.textContent = ''
                singleCell.style.backgroundColor = 'deepskyblue'
                singleCell.style.transition = 'background-color 0.75s'
            })
        } 
}

//generate grid
btnEl.addEventListener('click', function() {
    containerEl.innerHTML = '' // empty container
    let cellNumbers = levels();
    let cellWidth = widthCell()
    let containerWidth = widthContainer()
    grid(cellNumbers, cellWidth, containerWidth)

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

