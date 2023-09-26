const ul = document.querySelector(`#categories`);
const li = ul.querySelectorAll(`.item`);
console.log(`Number of categories: ${li.length}`)

li.forEach((li) => {
    const title = li.querySelector(`h2`);
    const subtitle = li.querySelectorAll(`ul li`);
    console.log(`Category : ${title.textContent}`)
    console.log(`Element: ${subtitle.length}`)
});