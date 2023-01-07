const hamburger = document.querySelector('.hamburger');
const desktopNav = document.querySelector('.desktop-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.navbar-tools').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    desktopNav.classList.remove('active');
  }));

const form = document.getElementById('form');

const email = document.getElementById('email');

function isEmail(email) {
  if (email.toLowerCase() === email) {
    return true;
  }
  return false;
}

function checkInputs(event) {
  // get the value from inputs
  const emailValue = email.value;

  if (isEmail(emailValue)) {
    return true;
  }

  document.querySelector('.small').innerHTML = 'Invalid email. It should only contain lowercace';
  event.preventDefault();
  return false;
}

form.addEventListener('submit', checkInputs);

const fullName = document.querySelector('#username');
const feedback = document.querySelector('.msg');
function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: email.value,
    Message: feedback.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}
[fullName, email, feedback].forEach((input) => input.addEventListener('focusout', visitorData));
// retrieve data from local storage
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  email.value = visitorDataExist.Email;
  feedback.value = visitorDataExist.Message;
}