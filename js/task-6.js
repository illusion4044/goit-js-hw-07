document.addEventListener('DOMContentLoaded', () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const inputAmount = document.querySelector('#controls input');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => {
    const amount = parseInt(inputAmount.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputAmount.value = '';
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    destroyBoxes(); 
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10; 
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
  }
});
