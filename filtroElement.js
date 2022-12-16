const filtraElement = document.getElementById('filter');

const cards = document.querySelectorAll('li');

filtraElement.addEventListener('input', filtraCards)

function filtraCards() {
  
  if (filtraElement.value != '') {
    for (let card of cards) {
      let title = card.querySelector('h2')
      
      let p = card.querySelector('p')

      p = p.textContent.toLowerCase()
      
      title = title.textContent.toLowerCase();
      
      let filtraText = filtraElement.value.toLowerCase();
      
      if(!title.includes(filtraText) && !p.includes(filtraText)) {
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
