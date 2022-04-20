const getCards = document.getElementById("getCards")


getCards.addEventListener("click", fetchCards)

function fetchCards() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}