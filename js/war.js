let deckId = window.localStorage.getItem('ID')
let card1 
let card2 
let card1Value
let card2Value
let cardsLeft
let computerPoints = 0
let playerPoints = 0
const notify = document.getElementById("deckNotify")
document.getElementById("getCards").addEventListener("click", fetchDeck)
document.getElementById("drawCards").addEventListener("click", drawCards)

function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        cardsLeft = data.remaining
        window.localStorage.clear()
        window.localStorage.setItem('ID', data.deck_id)
        deckId = window.localStorage.getItem('ID')
        notify.style.display= "inline"
        notify.textContent = "New Deck Accquired"
        document.getElementById("computerWrapper").innerHTML = ``
        document.getElementById("playerWrapper").innerHTML = ``
        document.getElementById("cardContainer").innerHTML = `
        <div class="cardPlaceHolder"></div>
        <div class="cardPlaceHolder"></div>`
        setTimeout(()=> notify.textContent = `Cards left: ${cardsLeft}`, 2000)
        renderPage()
        
    })
}

function drawCards() {
    if(deckId){
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            card1 = data.cards[0].image
            card2 = data.cards[1].image
            card1Value = data.cards[0].value
            card2Value = data.cards[1].value
            cardsLeft= data.remaining
            notify.textContent= `Cards left: ${data.remaining}`
            window.localStorage.setItem("card1", card1)
            window.localStorage.setItem("card2", card2)
            window.localStorage.setItem('cardsLeft', cardsLeft)
            calcWinner(data)
            renderCards()
        })
    }}

    function renderCards() {
        
        if(card1){
            document.getElementById("cardContainer").innerHTML = `
            <img src="${card1}">
            <img src="${card2}">
            `
            if(computerPoints){
            document.getElementById("computerWrapper").innerHTML= `
            <p id="computerPoints">Points: ${computerPoints} </p>`} 
            if(playerPoints){
            document.getElementById("playerWrapper").innerHTML= `
            <p id="playerPoints">Points: ${playerPoints} </p>`}
        }
} 

function calcWinner(data){
    if(cardsLeft === 0){
        if (computerPoints > playerPoints){
            setTimeout(()=> {
                document.getElementById("warContainer").innerHTML=`
                <div class="winScreen">
                <h1 class="winTitle">The Computer Has WON!</h1>
                <p>Refresh to play again!</p>
                <button id="refresh">Play Again</button>
                </div>
                `
                document.getElementById("refresh").addEventListener("click",function(){
                    location.reload()
                })
            }, 2000)
                
    }
    if (playerPoints > computerPoints){
        setTimeout(()=> {
            document.getElementById("warContainer").innerHTML=`
            <div class="winScreen">
            <h1 class="winTitle">You WON!</h1>
            <p>Refresh to play again!</p>
            <button id="refresh">Play Again</button>
            </div>
            `
        document.getElementById("refresh").addEventListener("click",function(){
            location.reload()
        })
    }, 2000)


    }} else
    {
        const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]
        let card1ValueIndex = valueOptions.indexOf(data.cards[0].value)
        let card2ValueIndex = valueOptions.indexOf(data.cards[1].value)
         

        if(card1ValueIndex > card2ValueIndex){
            computerPoints++
            window.localStorage.setItem("computerPoints", computerPoints)
        } if (card1ValueIndex < card2ValueIndex) {
            playerPoints++
            window.localStorage.setItem("playerPoints", playerPoints)

        }}
    }


function renderPage(){
    card1 = window.localStorage.getItem("card1")
    card2 = window.localStorage.getItem("card2")
    card1Value= window.localStorage.getItem("card1Value")
    card2Value= window.localStorage.getItem("card2Value")
    cardsLeft = window.localStorage.getItem("cardsLeft")
    computerPoints = window.localStorage.getItem("playerPoints")
    playerPoints = window.localStorage.getItem("computerPoints")
    notify.style.display= "inline"
    notify.textContent= `Cards left: 52`
    if (card1){
    notify.textContent= `Cards left: ${cardsLeft}`
    renderCards()} 
    
}
renderPage()