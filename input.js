const input = document.getElementById('input');
const cards = document.querySelectorAll('.cards');
const result = document.getElementById('result');

function clearInput() {
  input.value = '';
  cards.forEach(card => {
    card.style.display = 'inline-block';
  })
}

function findHome() {
  let inputValue = input.value.toLowerCase();

  cards.forEach(card => {
    let name = card.querySelector('h1').innerText.toLowerCase();
    if (name.includes(inputValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
};