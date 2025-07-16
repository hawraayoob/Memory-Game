const emoji = [
  '🏀',
  '🏀',
  '🏐',
  '🏐',
  '🏈',
  '🏈',
  '⚽',
  '⚽',
  '🎳',
  '🎳',
  '🏓',
  '🏓',
  '🏸',
  '🏸',
  '🎾',
  '🎾'
]

let frontFace = null
let backFace = null
let canFlip = true
let match = 0
let score = 0
let flippedCard = 0;

function create() {
  const game = document.getElementById('game')
  const random = emoji.sort(() => 0.5 - Math.random())


  random.forEach((value, index) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.value = value
    card.setAttribute('data-index', index)
    card.addEventListener('click', () => flipCard(card))
    game.appendChild(card)
  })
}

function flipCard(card) {
  
  if (!canFlip || card === frontFace || card.classList.contains('flipped')) return
  card.classList.add('flipped')
  card.textContent = card.dataset.value
  if (frontFace === null) {
    frontFace = card
  } else {
    backFace = card
    canFlip = false
    check()
  }
}

function check() {
  if (frontFace.dataset.value === backFace.dataset.value) {
    match++
    score++
    updateS()
    if (match === emoji.length / 2) {
      win()
    } else {
      reset()
    }
  } else {
    canFlip = false
    setTimeout(unflip, 1000)
  } 
}

function unflip() {
  frontFace.classList.remove('flipped')
  backFace.classList.remove('flipped')
  frontFace.textContent = ''
  backFace.textContent = ''
  reset()
}


function reset() {
  [frontFace, backFace] = [null, null]
  canFlip = true;
}


function win() {
  setTimeout(() => {
    alert('YOU WIN 👑')
    resetGame()
  }, 1000)
}


function resetGame() {
  const game = document.getElementById('game')
  game.innerHTML = ''
  match = 0
  score = 0
  updateS();
  create();
}

create()
const scoreE = document.createElement('div')
scoreE.id = 'score'
scoreE.textContent = 'Score: 0'
document.body.prepend(score)
