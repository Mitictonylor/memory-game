const cards = document.querySelectorAll('.memory-card');
//when we click a card we gonna add a class flip to this card(the one clicked)

function flipCard() {
  // toggle is ;ike a switch if i click once it takes the flip class  from the css
  // if i click again it goes back to the previous class, so it's like an on and off
  this.classList.toggle('flip');
}
// to all the cards add this event listener
cards.forEach(card => card.addEventListener('click', flipCard));
