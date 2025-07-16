const allCards = document.querySelectorAll(".card");

let firstCard = null,
  secondCard = null;
let canClick = true;
let score = 0;

const restart = document.getElementById("restart");
const scoreE = document.createElement('div');


scoreE.id = 'score';
scoreE.textContent = 'Score: 0';
document.body.prepend(scoreE);

function updateScore() {
  scoreE.textContent = `Score: ${score}`;
}


//flipcard
allCards.forEach((card) => {
  card.addEventListener("click", handleCardClicked);


  
  let randPos = Math.floor(Math.random() * 12);
  card.style.order = randPos;
});

function handleCardClicked() {
  if (!canClick || this.classList.contains("flip")) return;

  this.classList.add("flip");

  if (!firstCard) firstCard = this;
  else if (!secondCard) secondCard = this;

  const img1 = firstCard ? firstCard.firstElementChild.src : null;
  const img2 = secondCard ? secondCard.firstElementChild.src : null;

  //score
  if (img1 && img2 && img1 === img2) {
    console.log("Match!");
    score++;
    updateScore();
    firstCard = null;
    secondCard = null;
    
  
    if (score === 6) handleGameOver();
  } else if (img1 && img2) {
    canClick = false;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = null;
      secondCard = null;
      canClick = true;
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