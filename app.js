//function

const allCards = document.querySelectorAll(".card");

let firstCard = null,
  secondCard = null;

let canClick = true;

let score = 0;

allCards.forEach((card) => {
  card.addEventListener("click", handleCardClicked);
});


// click card
function handleCardClicked() {
  if (!canClick) return;



  // avoide double click
  if (this.classList.contains("flip")) return;

  this.classList.add("flip");

  if (!firstCard) firstCard = this;
  else if (!secondCard) secondCard = this;

  let img1 = firstCard ? firstCard.firstElementChild.src : null;
  let img2 = secondCard ? secondCard.firstElementChild.src : null;



  // handle matching condition
  if (img1 === img2) {
    console.log("Matching....");
    firstCard = null;
    secondCard = null;

    score++;
    if (score === 6) handleGameOver();
  }



// matching
  else if (img1 && img2) {
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

function handleGameOver() {
  setTimeout(() => {
    let retVal = confirm("YOU WIN 👑\nPlay Again ???");
    if (retVal === true) {
      location.reload();
    }
  }, 1000);
}


// shuffle
allCards.forEach((card) => {
  let randPos = Math.floor(Math.random() * 12);
  card.style.order = randPos;
});

