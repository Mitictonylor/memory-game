const cards = document.querySelectorAll('.memory-card');
//when we click a card we gonna add a class flip to this card(the one clicked)
let hasFlippedCard = false;
let firstCard, secondCard;
function flipCard() {
  // toggle is ;ike a switch if i click once it takes the flip class  from the css
  // if i click again it goes back to the previous class, so it's like an on and offgit
  // this.classList.toggle('flip');
  this.classList.add('flip') //because when we turn the card, we want to wait the second card aswell
  if (!hasFlippedCard){ //when we click make the hasflipped card as true if it was false
    hasFlippedCard= true,
    firstCard = this;
  }
}
// to all the cards add this event listener, so as soon as clicked invoke flipcard
cards.forEach(card => card.addEventListener('click', flipCard));
