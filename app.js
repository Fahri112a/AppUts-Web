const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginForm = document.querySelector("form");
const orderSection = document.getElementById("order");

const users = [
  { username: "fahrilepo12@gmail.com", password: "233307075" },
];

let loggedInUser = null;

function login() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    loggedInUser = foundUser;
    alert("Login berhasil!");

    window.location.href = "order.html";
  } else {
    alert("Username atau password salah!");
  }
}


loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});


function checkLogin() {
  if (!loggedInUser) {
    alert("Anda belum login! Silahkan login terlebih dahulu.");
    window.location.href = "login.html";
  }
}


orderSection.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    checkLogin(); 

    console.log("Item dipesan!");
  }
});


checkLogin();

