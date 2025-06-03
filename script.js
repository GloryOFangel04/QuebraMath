const container = document.querySelector('.gallery-container');
let startX = 0;
let isDown = false;

// Troca posição dos cards
function reorder(direction) {
  const cards = [...container.children]; // pega os cards como array

  if (direction === 'left') {
    const first = cards.shift(); // remove o primeiro
    container.appendChild(first); // coloca no final
  } else {
    const last = cards.pop(); // remove o último
    container.prepend(last); // coloca no início
  }

  highlightCenter(); // atualiza o destaque
}

// Adiciona destaque ao card do meio
function highlightCenter() {
  const cards = [...container.children];

  // remove o destaque de todos
  cards.forEach(card => card.classList.remove('center'));

  // pega o elemento do meio
  const middleIndex = Math.floor(cards.length / 2);
  cards[middleIndex].classList.add('center'); // adiciona destaque
}

// EVENTOS DE CLIQUE NOS BOTÕES
document.getElementById('prev').addEventListener('click', () => {
  reorder('right');
});

document.getElementById('next').addEventListener('click', () => {
  reorder('left');
});

// EVENTOS DE ARRASTAR COM MOUSE
container.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX;
});

container.addEventListener('mouseup', e => {
  if (!isDown) return;
  isDown = false;
  const diff = e.pageX - startX;

  if (diff > 50) reorder('right');
  else if (diff < -50) reorder('left');
});

// EVENTOS DE ARRASTAR COM TOUCH
container.addEventListener('touchstart', e => {
  isDown = true;
  startX = e.touches[0].clientX;
});

container.addEventListener('touchend', e => {
  if (!isDown) return;
  isDown = false;
  const diff = e.changedTouches[0].clientX - startX;

  if (diff > 50) reorder('right');
  else if (diff < -50) reorder('left');
});

// APLICA O DESTAQUE INICIAL
highlightCenter();
