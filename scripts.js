const cards = document.querySelectorAll('.memory-card');
//when we click a card we gonna add a class flip to this card(the one clicked)

function flipCard() {
  this.classList.toggle('flip');
}
// to all the cards add this event listener
cards.forEach(card => card.addEventListener('click', flipCard));
