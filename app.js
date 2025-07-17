const allCards = document.querySelectorAll(".card");

let cardOne = null,
  cardTwo = null;
let canFlip = true;
let score = 0;

const restart = document.getElementById("restart");
const scoreS = document.createElement('div');


scoreS.id = 'score';
scoreS.textContent = 'Score: 0';
document.body.prepend(scoreS);

function refreshScore() {
  scoreS.textContent = `Score: ${score}`;
}



allCards.forEach((card) => {
  card.addEventListener("click", flipCard);


  //rearrange cards randomly
  let randomOrder = Math.floor(Math.random() * 16);
  card.style.order = randomOrder;
});

//flipcard
function flipCard() {
  if (!canFlip || this.classList.contains("flip")) return;

  this.classList.add("flip");

  if (!cardOne) cardOne = this;
  else if (!cardTwo) cardTwo = this;

  const pic1 = cardOne ? cardOne.firstElementChild.src : null;
  const pic2 = cardTwo ? cardTwo.firstElementChild.src : null;


  if (pic1 && pic2 && pic1 === pic2) {
    console.log("Match!");
    score++;
    refreshScore();
    cardOne = null;
    cardTwo = null;
    

    if (score === 8) handleGameEnd();
  } else if (pic1 && pic2) {
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
function handleGameEnd() {
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

