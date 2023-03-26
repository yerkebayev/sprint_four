const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
console.log(id);
const user = JSON.parse(localStorage.getItem(localStorage.key(id)));
const userInfo = document.getElementById('user-info');

console.log(user);
if (user) {
  userInfo.innerHTML = `
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <p>Country: ${user.country}</p>
    <p>Birthday: ${user.birthday}</p>
  `;
} else {
  userInfo.innerHTML = '<p>There is no user information to display</p>';
}
