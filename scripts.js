const cards = document.querySelectorAll('.memory-card');
//when we click a card we gonna add a class flip to this card(the one clicked)
let hasFlippedCard = false;
// Let’s declare a lockBoard variable. When the player clicks the second card, lockBoard
// will be set to true and the condition if (lockBoard) return; will prevent any card flipping
// before the cards are hidden or match:
let lockBoard = false;

let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return
  if (this === firstCard) return;//so u are not able to have 1st and 2nd card with the same value
  // toggle is ;ike a switch if i click once it takes the flip class  from the css
  // if i click again it goes back to the previous class, so it's like an on and offgit
  // this.classList.toggle('flip');
  this.classList.add('flip') //because when we turn the card, we want to wait the second card aswell
  if (!hasFlippedCard) { //when we click make the hasflipped card as true if it was false
    hasFlippedCard = true,
      firstCard = this;
    return;
  }
  // So now we can check for a match by accessing both cards dataset. Let’s extract the matching
  // logic to its own method checkForMatch() and also set hasFlippedCard back to false. In case
  //  of a match, disableCards() is invoked and the event listeners on both cards are detached,
  //   to prevent further flipping. Otherwise, unflipCards() will turn both cards back by a
  //   1500ms timeout that removes the .flip class:
  secondCard = this;


  checkForMatch()
}

function checkForMatch() {
  // if (firstCard.dataset.framework === secondCard.dataset.framework) {
  //   disableCards();
  //   return;
  // }
  // unflipCards()
  //OR
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

function unflipCards() {

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false
  }, 1500);

}
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// to all the cards add this event listener, so as soon as clicked invoke flipcard
cards.forEach(card => card.addEventListener('click', flipCard));
