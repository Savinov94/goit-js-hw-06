const valueSpan = document.querySelector(`#value`);
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector(`[data-action="increment"]`);

let valueNumber = 0;

decrement.addEventListener('click', () => {
  valueNumber -= 1;
  valueSpan.textContent = valueNumber;
});

increment.addEventListener('click', () => {
  valueNumber += 1;
  valueSpan.textContent = valueNumber;
});