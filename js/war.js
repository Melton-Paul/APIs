let deckId = window.localStorage.getItem('ID')
let card1 
let card2 
const notify = document.getElementById("deckNotify")
document.getElementById("getCards").addEventListener("click", fetchDeck)
document.getElementById("drawCards").addEventListener("click", drawCards)

function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        window.localStorage.clear()
        window.localStorage.setItem('ID', data.deck_id)
        deckId = window.localStorage.getItem('ID')
        notify.style.display = "inline"
        setTimeout(()=> notify.style.display = "none", 2000)
        document.getElementById("cardContainer").innerHTML = `
        <div class="cardPlaceHolder"></div>
        <div class="cardPlaceHolder"></div>`

        
    })
}

function drawCards() {
    if(deckId){
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            card1 = data.cards[0].image
            card2 = data.cards[1].image
            window.localStorage.setItem("card1", card1)
            window.localStorage.setItem("card2", card2)
            renderCards()
        })
    }}

function renderCards() {
    document.getElementById("cardContainer").innerHTML = `
    <img src="${card1}">
    <img src="${card2}">
    `
}


function renderPage(){
    if (deckId) {
        document.getElementById("drawCards").style.display = "block"
    } 
    card1 = window.localStorage.getItem("card1")
    card2 = window.localStorage.getItem("card2")
    if (card1){
    renderCards()} 
    
}
renderPage()