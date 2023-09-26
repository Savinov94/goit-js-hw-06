const form = document.querySelector(`.login-form`);

function handleSubmit(event) {
event.preventDefault();
const formData = new FormData(event.currentTarget);
const formObject = {};
formData.forEach((value, key) => {
formObject[key] = value;
  });

if (!formObject.email || !formObject.password) {
alert('Усі поля повинні бути заповнені!');
return;
  }
console.log(formObject);
form.reset();
}

form.addEventListener('submit', handleSubmit);

