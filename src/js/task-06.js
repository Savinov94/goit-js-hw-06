const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, () => {
    const inputValue = inputEl.value;
    const inputLe = Number(inputEl.getAttribute('data-length'));

    if (inputValue.length === inputLe) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.add(`valid`);

    } else {
        inputEl.classList.remove(`valid`);
        inputEl.classList.add(`invalid`);
    }

} )