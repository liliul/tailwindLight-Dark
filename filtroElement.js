const filtraElement = document.getElementById('filter');

const cards = document.querySelectorAll('ul > li');

filtraElement.addEventListener('input', filtraCards)

function filtraCards() {
  
  if (filtraElement.value != '') {
    for (let card of cards) {
      let title = card.querySelector('h2')

      title = title.textContent.toLowerCase();
      
      let filtraText = filtraElement.value.toLowerCase();

      if(!title.includes(filtraText)) {
        card.style.display = 'none'
      }else {
        card.style.display = 'block'
      }
    }
  }else {
    for (let card of cards) {
      card.style.display = 'block'
    }
  }

}
