let deckId = window.localStorage.getItem('ID')
document.getElementById("getCards").addEventListener("click", fetchDeck)
document.getElementById("drawCards").addEventListener("click", drawCards)

function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        window.localStorage.clear()
        window.localStorage.setItem('ID', data.deck_id)
        deckId = window.localStorage.getItem('ID')
        })
}

function drawCards() {
    if(deckId){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => console.log(data))} else {
            console.log("You have to draw deck first!")
        }
}