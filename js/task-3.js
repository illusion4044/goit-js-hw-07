const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim(); // Очищаємо значення від пробілів по краях

  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous'; // Якщо значення порожнє або містить лише пробіли, встановлюємо "Anonymous"
  } else {
    nameOutput.textContent = trimmedValue; // Встановлюємо значення інпуту як текст для виводу
  }
});
