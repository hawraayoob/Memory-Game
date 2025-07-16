const allCards = document.querySelectorAll(".card");

let cardOne = null,
  cardTwo = null;
let canFlip = true;
let score = 0;

const restart = document.getElementById("restart");
const scoreE = document.createElement('div');


scoreE.id = 'score';
scoreE.textContent = 'Score: 0';
document.body.prepend(scoreE);

function refreshScore() {
  scoreE.textContent = `Score: ${score}`;
}


//flipcard
allCards.forEach((card) => {
  card.addEventListener("click", flipCard);


  
  let randPos = Math.floor(Math.random() * 12);
  card.style.order = randPos;
});

function flipCard() {
  if (!canFlip || this.classList.contains("flip")) return;

  this.classList.add("flip");

  if (!cardOne) cardOne = this;
  else if (!cardTwo) cardTwo = this;

  const img1 = cardOne ? cardOne.firstElementChild.src : null;
  const img2 = cardTwo ? cardTwo.firstElementChild.src : null;

  //refresh score matchcard
  if (img1 && img2 && img1 === img2) {
    console.log("Match!");
    score++;
    refreshScore();
    cardOne = null;
    cardTwo = null;
    
  
    if (score === 6) handleGameOver();
  } else if (img1 && img2) {
    canFlip = false;
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = null;
      cardTwo = null;
      canFlip = true;
    }, 1000);
  }
}


// win fuction
function handleGameOver() {
  document.querySelector(".message").textContent= "YOU WIN 👑"
  setTimeout(() => {
  location.reload();
  }, 1500);
}


//restart
restart.addEventListener("click", () => {
  console.log("Restarting game...");
  location.reload();
});

