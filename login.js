const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
    window.location.href = `final.html?id=${email}`;
  }

  form.reset();
});
