const inputEl = document.querySelector(`#font-size-control`);
const inputText = document.querySelector(`#text`);

inputEl.addEventListener("input", (event) => {
    
    const fontSize = event.target.value + "px";
    inputText.style.fontSize = fontSize;
})
