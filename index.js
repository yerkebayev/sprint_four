const form = document.getElementById('registration-form');
form.addEventListener('submit', function() {

    const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;
  const country = document.getElementById('country').value;
  const birthday = document.getElementById('birthday').value;
  const user = {
    username: username,
    email: email,
    password: password,
    country: country,
    birthday: birthday
  };

  localStorage.setItem(email, JSON.stringify(user));
  window.location.href = 'login.html';

  form.reset();
});
