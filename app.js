const cards = document.querySelectorAll('.card');

let cards = [];
let firstCard, SecondCard;
let lockBoard = false;
let score = 0;



//flipcard

function flipCard() {

  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();

}







document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
.then((res) => res.json())
.then((data) => {

  cards=[...data, ...data];
  shuffleCards();
  generateCards();

} );

//replay
function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textcontent = score;
  gridcountainer.innerHTML = "";
  generateCards();

}


//reset board
function resetBoard () {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}





// generatecard
function generateCards() {
    for (let card of cards) {

        const cardElement.classList.add("card");
        cardElement = document.createElement("div");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML =
        `
        <div class="front-image" src=${card.image} />
        </div>
        <div class="back"> </div>
        `;
        gridcountainer.appendChild = (cardElemnent);
        cardElement.addEventListener=("click", flipCard);
    
    }
}


//shuffle
function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;

while (currentIndex !== 0) { 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temporaryValue = cards [currentIndex];
    cards [currentIndex] = cards [randomIndex];
    cards [randomIndex] = temporaryValue;
}

 }

 cards.forEach(card => card.addEventListener('click', flipCard));
